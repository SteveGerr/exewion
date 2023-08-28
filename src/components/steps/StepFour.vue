<template>
  <div class="step-four">
      <div class="step-four__wrapper">
        <header class="step-four__header">
          <AppHeading>Создание портфеля</AppHeading>
        </header>
        <div class="step-four__available">
          <p class="step-four__label">доступно USDT на бирже</p>
          <p class="step-four__balance-value">{{ 1000 }} USDT</p>
        </div>
        <div class="step-four__balance-choice">
          <p class="step-four__label">выберите рабочий баланс</p>
          <AppRange
            class="step-four__balance-range"
            :model-value="rangeValue"
            @input="changeBalanceRange"
            :min="0"
            :max="100000"
            :step="10"
            >
          </AppRange>
          <div class="step-four__enter-balance">
            <AppInput
              :model-value="rangeValue"
              @input="changeBalanceRange"
              type="number"
              purple
              :min="0" inputmode="numeric" pattern="[0-9]*"
              >
            </AppInput>
            <p class="step-four__enter-balance-label">USDT</p>
            <div class="step-four__label-small">
              можете ввести вручную
            </div>
          </div>
        </div>
        <div class="step-four__exclude-coins">
          <p class="step-four__label">исключить монеты</p>
          <AppSelect class="step-four__select" :options="coinsList" @input="addCoin"></AppSelect>
          <p class="step-four__label-small">нажмите на поле ввода для выбора из списка или введите название вручную</p>
        </div>
        <div class="step-four__selected-coins">
          <AppBadge v-for="coin in selectedCoins" :key="coin.id" @remove="removeSlelectedCoins(coin.id)">{{ coin.name }}</AppBadge>
        </div>
        <AppButton class="step-four__button" @on-click="changeStep" large green>СОЗДАТЬ</AppButton>
      </div>
  </div>
</template>

<script setup>
import { useStepsStore } from '@/store/store'
import { storeToRefs } from 'pinia'
import AppButton from '@/components/buttons/AppButton.vue'
import AppHeading from '@/components/heading/AppHeading.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppRange from '@/components/range/AppRange.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import AppBadge from '../badge/AppBadge.vue'

const store = useStepsStore()

const { coinsList, selectedCoins, rangeValue } = storeToRefs(store)
console.log(selectedCoins)

const { changeStep, addCoin, changeBalanceRange, removeSlelectedCoins } = store

</script>

<style lang="scss">
  .step-four {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 710px;
    height: 100%;
    color: $gray;

    &__button {
      max-width: 208px;
      font-size: 23px;
      margin: 0 0 10px 0;

      @media screen and (max-width: 768px){
        margin: 0 0 60px 0;
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0 18px;
    }

    &__header {
      display: flex;
      width: 100%;
      margin: 10px 0 38px 0;
    }

    &__available {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      gap: 20px;

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin: 0 0 10px 0;
        gap: 10px;
      }
    }

    &__label {
      @include paragraph;
      white-space: nowrap;
    }

    &__label-small {
      @include text(13px, 28px, 400);
      color: $lilac-light;
      text-align: center;
    }

    &__balance-value {
      padding: 9px 15px;
      border-radius: 10px;
      background-color: $dark-blue;
      @include text(17px, normal, 600);
      letter-spacing: 0.325px;
      color: $white;
      white-space: nowrap;
    }

    &__balance-choice {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0 0 50px 0;

      @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
    }

    &__enter-balance {
      max-width: 158px;
      position: relative;

      @media screen and (max-width: 768px){
        max-width: 100%;
        width: 100%;
      }

      .app-input__input {
        padding: 9px 55px 9px 9px;
        font-size: 15px;
        color: $white;
      }
    }

    &__balance-range {
      max-width: 260px;
      margin: 0 15px;

      @media screen and (max-width: 768px){
        max-width: 100%;
        width: 100%;
        margin: 0;
      }
    }

    &__enter-balance-label {
      position: absolute;
      top: 19px;
      right: 10px;
      @include text(15px, normal, 600);
      letter-spacing: 0.325px;
      color: #51427A;
    }

    &__exclude-coins {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 0 15px 0;

      .step-four__label-small {
        text-align: left;
      }
    }

    &__select {
      margin: 10px 0 5px 0;
    }

    &__selected-coins {
      display: flex;
      align-items: center;
      width: 100%;
      height: 45px;
      margin: 0 0 100px 0;
      gap: 14px;
      overflow-x: auto;

      @media screen and (max-width: 768px){
        margin: 0 0 60px 0;
      }
    }

  }

</style>
