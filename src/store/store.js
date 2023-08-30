import socketService from '@/websockets/socket.service'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
export const useStepsStore = defineStore('steps', () => {
  const currentStep = ref(1)
  const rangeValue = ref(1)
  const ipAddress = ref('45.82.71.35')
  const invalidLogin = ref(false)
  const credentials = ref({
    login: '',
    password: '',
    needRemember: false
  })
  const coinsList = ref([
    {
      id: 1,
      name: 'BTC (Bitcoin)'
    },
    {
      id: 2,
      name: 'ETH (Etherium)'
    },
    {
      id: 3,
      name: 'LTC'
    },
    {
      id: 4,
      name: 'BNB'
    }
  ])

  const selectedCoins = ref([])

  const changeStep = () => {
    if (currentStep.value > 0 && currentStep.value < 4) { currentStep.value++ }
  }

  const addCoin = (coin) => {
    if (!selectedCoins.value.includes(coin)) {
      selectedCoins.value.push(coin)
    }
  }

  const changeBalanceRange = (e) => {
    rangeValue.value = parseInt(e.target.value.replace(/\D/g, ''))
    if (e.target.value.length === 1 && e.target.value.charAt(0) === '0') {
      const res = e.target.value = ''
      rangeValue.value = res
    } else if (e.target.value.length > 1 && e.target.value.startsWith('00')) {
      rangeValue.value = ''
    }
  }

  const removeSlelectedCoins = (id) => {
    console.log(id)
    selectedCoins.value = selectedCoins.value.filter((coin) => coin.id !== id)
  }

  const setCredentials = (fieldsData) => {
    credentials.value.login = fieldsData.login
    credentials.value.password = fieldsData.password
  }

  const onLogIn = (credentials) => {
    socketService.request('auth', credentials).then((data) => {
      localStorage.setItem('token', data.remember_token)
      invalidLogin.value = false
      router.push('/profile')
    })
      .catch((error) => {
        try {
          console.log(error)
          invalidLogin.value = true
        } catch (error) {

        }
      })
  }

  const onLogOut = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ipAddress.value)
    } catch (error) {
      console.log('Cannot copy')
    }
  }

  return {
    removeSlelectedCoins,
    changeBalanceRange,
    selectedCoins,
    setCredentials,
    invalidLogin,
    onLogIn,
    copyAddress,
    currentStep,
    credentials,
    changeStep,
    rangeValue,
    ipAddress,
    coinsList,
    onLogOut,
    addCoin
  }
})
