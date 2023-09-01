import socketService from '@/websockets/socket.service'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
export const useStepsStore = defineStore('steps', () => {
  const notifications = ref(11)
  const usdtValue = ref(1000)
  const currentStep = ref(1)
  const rangeValue = ref(1)
  const ipAddress = ref('45.82.71.35')
  const invalidLogin = ref('')

  // register
  const isRegister = ref('')

  // balance
  const balanceValue = ref(1000.10)
  const balanceHistoryData = ref(
    [
      { date: '19/08/2023 12:00', type: 'Ввод', sum: '12220 USDT' },
      { date: '19/08/2023 12:00', type: 'Ребалансировка', sum: '12220 USDT' }
    ]
  )
  //

  // portolio
  const portfolioCoinsValue = ref(30)
  const portfolioDateProgress = ref(50)
  const allocatedBalance = ref(1000)
  const portfolioCost = ref(1010)
  const balanceGrowth = ref(12)
  const costForecast = ref(1030)
  const portfolioData = ref(
    {
      table1: [
        { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' },
        { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' },
        { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' },
        { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' }
      ],
      table2: [
        { hash: '20', coinName: 'BTC', percent: '20%', sum: '0.01892' },
        { hash: '21', coinName: 'BTC', percent: '20%', sum: '0.01892' },
        { hash: '22', coinName: 'BTC', percent: '20%', sum: '0.01892' },
        { hash: '23', coinName: 'BTC', percent: '20%', sum: '0.01892' }
      ]
    }
  )
  //

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

  /** Next step */
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
    selectedCoins.value = selectedCoins.value.filter((coin) => coin.id !== id)
  }

  const setCredentials = (fieldsData) => {
    credentials.value.login = fieldsData.login
    credentials.value.password = fieldsData.password
  }

  const onLogIn = (credentials) => {
    socketService.request('auth', credentials).then((data) => {
      localStorage.setItem('token', data.remember_token)
      router.push('/profile')
      invalidLogin.value = ''
    })
      .catch((error) => {
        console.log(error)
        invalidLogin.value = `${error}`
      })
  }

  const onLogOut = () => {
    socketService.request('logout').then(data => {
      if (data.data === true) {
        localStorage.removeItem('token')
        router.push('/login')
      }
    }).catch((error) => {
      console.log(error)
    })
    // Когда будет работать socketService удалить
    localStorage.removeItem('token')
    router.push('/login')
  }

  const onRegister = (data) => {
    const user = {
      fullname: 'User',
      email: data.email,
      password: data.password
    }
    socketService.request('register', user).then(data => {
      console.log(data)
      // Если всё регистрация прошла переходим на логин
      router.push('/login')
      isRegister.value = ''
    }).catch((error) => {
      console.log(error)
      isRegister.value = `${error}`
    })
    // Для демо! Когда будет работать регистрация, этот пуш можно убрать
    router.push('/login')
  }

  /** Copy IP address */
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ipAddress.value)
    } catch (error) {
      console.log('Cannot copy')
    }
  }

  const joinToMarket = (params) => {
    socketService.request('addProduct', params).then(data => {
      console.log(data)
      changeStep()
    }).catch(error => {
      console.log(error)
    })
    // Можно будет удалить, после того, как будет отрабатывать socketService
    changeStep()
  }

  const createPortfolio = () => {
    const params = {
      usdt: usdtValue.value,
      assets: selectedCoins.value
    }
    socketService.request('createPorfolio', params).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  const changePass = (params) => {
    const passwords = {
      current_password: params.currentPassword,
      password: params.password
    }
    socketService.request('changePass', passwords).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  const rebalance = () => {
    socketService.request('rebalance').then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  const sell = () => {
    socketService.request('sell').then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  return {
    portfolioDateProgress,
    removeSlelectedCoins,
    portfolioCoinsValue,
    changeBalanceRange,
    balanceHistoryData,
    allocatedBalance,
    createPortfolio,
    balanceGrowth,
    selectedCoins,
    setCredentials,
    notifications,
    portfolioData,
    portfolioCost,
    balanceValue,
    invalidLogin,
    costForecast,
    joinToMarket,
    copyAddress,
    currentStep,
    credentials,
    isRegister,
    onRegister,
    changeStep,
    changePass,
    rangeValue,
    rebalance,
    usdtValue,
    ipAddress,
    coinsList,
    onLogOut,
    onLogIn,
    addCoin,
    sell
  }
})
