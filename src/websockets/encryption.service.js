
// const Buffer = require('buffer').Buffer
import { Buffer } from 'buffer'
const crypto = require('crypto-browserify')

export default class Encryption {
    base = 'cf01e94bf01c31edd32109b22e8c9c1acd0f86c5a3216616524d148ae9af12dc4c0405739fb1bfb1';

    constructor (algo = 'aes-256-cbc') {
      this.algo = algo
    }

    init (key, iv) {
      this.key = key
      this.iv = iv
    }

    initBase () {
      console.log(Buffer)
      this.init(Buffer.from(this.base.substr(0, 64), 'hex'), this.base.substr(64))
    }

    generateKey () {
      return crypto.randomBytes(32)
    }

    generateIV () {
      return crypto.randomBytes(8).toString('hex')
    }

    encrypt (data) {
      const cipher = crypto.createCipheriv(this.algo, this.key, this.iv)
      let enc = cipher.update(data, 'utf8', 'binary')
      enc += cipher.final('binary')
      return enc
    }

    decrypt (encoded) {
      const decipher = crypto.createDecipheriv(this.algo, this.key, this.iv)
      let data = decipher.update(encoded, 'binary', 'utf8')
      data += decipher.final('utf8')
      return data
    }
}
