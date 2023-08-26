
import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useStepsStore = defineStore('steps', () => {
  const currentStep = ref(1)
  const rangeValue = ref(0)
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

  return {
    removeSlelectedCoins,
    changeBalanceRange,
    currentStep,
    changeStep,
    coinsList,
    selectedCoins,
    addCoin,
    rangeValue
  }
})
