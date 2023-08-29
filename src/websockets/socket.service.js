import { EventEmitter } from 'events'
import Encryption from './encryption.service'
const Buffer = require('buffer').Buffer

const RECONNECTING_TIMEOUT = 2000

export default new class Connection extends EventEmitter {
    timeoutDataReceiving = 90000;
    queryId = 0;

    constructor () {
      super()
      this.queryId = new Date().getTime()
      this.queries_callbacks = []
      this.ready = false
    }

    reconnect (once = false) {
      if (this.reconnectTimer) {
        if (once) return
        clearTimeout(this.reconnectTimer)
      }
      this.reconnectTimer = setTimeout(() => {
        console.log('reconnect!')
        this.init(this.processing, this.address)
        this.reconnectTimer = undefined
      }, RECONNECTING_TIMEOUT)
    }

    isConnected () {
      return (
        typeof this.ws !== 'undefined' && this.ws.readyState === WebSocket.OPEN
      )
    }

    init (processing, address) {
      try {
        this.ready = false
        if (this.ws) {
          try {
            this.ws.close()
          } catch {}
          delete this.ws
        }
        this.ws = new WebSocket(address)
        this.processing = processing
        this.address = address
        this.ws.onopen = () => this.onOpen()
        this.ws.onmessage = event => this.onMessage(event)
        this.ws.onerror = () => this.onError()
        this.ws.onclose = event => this.onClose(event)
      } catch (e) {
        this.reconnect()
      }
    }

    onOpen () {
      this.ready = false
      this.encryption = new Encryption()
      this.encryption.initBase()
      this.request('ab').then(data => {
        this.encryption = new Encryption()
        this.encryption.init(
          Buffer.from(data.x.substr(0, 64), 'hex'),
          data.x.substr(64)
        )
        this.ready = true
        this.emit('ready', data.i)
      }).catch(() => {
        this.reconnect(true)
      })
      this.emit('open')
    }

    request (method, params = {}) {
      console.log(method, params)
      return new Promise((resolve, reject) => {
        const msg = {}
        msg.qid = ++this.queryId
        msg.method = method
        msg.params = params
        const timeout = setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'Request timeout' })
        }, this.timeoutDataReceiving)
        this.queries_callbacks[msg.qid] = (data) => {
          clearTimeout(timeout)
          if (typeof data.d !== 'undefined') {
            resolve(data.d)
          } else {
            reject(data.e)
          }
        }
        if (typeof this.ws !== 'undefined' && this.ws.readyState === 1) {
          this.ws.send(
            this.encryption
              ? this.encryption.encrypt(JSON.stringify(msg))
              : JSON.stringify(msg)
          )
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ message: 'not connected' })
          this.reconnect(true)
        }
      })
    }

    onMessage (event) {
      const data = JSON.parse(this.encryption.decrypt(event.data))
      if (data && (!data.method || (data.method !== 'botList' && data.method !== 'botListItem'))) {
        console.log(data)
      }
      if (data.method) {
        if (typeof (this.processing)[data.method] === 'function') {
          // eslint-disable-next-line no-useless-call
          (this.processing)[data.method].apply(this.processing, [
            data.params
          ])
        } else {
          this.emit('m_' + data.method, data.params)
        }
      } else if (data.rqid) {
        if (typeof this.queries_callbacks[data.rqid] === 'function') {
          this.queries_callbacks[data.rqid](data)
          delete this.queries_callbacks[data.rqid]
        }
      }
    }

    onError (/* error: Event */) {
      this.reconnect()
    }

    onClose (event) {
      this.ready = false
      this.reconnect()
    }
}()
