<template>
  <div class="step-two">
      <div class="step-two__wrapper">
        <header class="step-two__header">
          <AppHeading>Подключение к бирже</AppHeading>
        </header>
        <form class="step-two__form" @submit.prevent>
          <p class="step-two__paragraph">Выберите биржу</p>
          <div class="step-two__stock-choice">
            <RadioButton @on-change="onSelectStock" :value="'binance'" class="step-two__radio-button" :id="2" checked>
              <BinanceIcon />
            </RadioButton>
            <RadioButton @on-change="onSelectStock" :value="'bybit'" class="step-two__radio-button" :id="1">
              <BybitIcon />
            </RadioButton>
          </div>
          <div class="step-two__inputs">
            <p class="step-two__paragraph">добавьте эти IP адреса в настройках ваших api ключей дл большей безопасности</p>
            <AppInput v-model="ipAddress" @onCopy="copyAddress" copy purple></AppInput>
            <p class="step-two__paragraph">API ключ <AppLink class="step-two__how-to-create" :href="'#'">(Как создать?)</AppLink></p>
            <AppInput v-model="data.key" placeholder="введите ваш api ключ" purple></AppInput>
            <p class="step-two__paragraph">добавьте эти IP адреса в настройках ваших api ключей дл большей безопасности</p>
            <AppInput v-model="data.secret" placeholder="введите ваш секретный ключ" purple></AppInput>
            <AppButton class="step-two__confirm" @onClick="joinToMarket(data)" large green>CONFIRM</AppButton>
          </div>
        </form>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStepsStore } from '@/store/store'
import AppHeading from '@/components/heading/AppHeading.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import RadioButton from '@/components/radioButton/RadioButton.vue'
import AppLink from '@/components/links/AppLink.vue'
import AppButton from '@/components/buttons/AppButton.vue'
import BinanceIcon from '@/components/icons/BinanceIcon.vue'
import BybitIcon from '@/components/icons/BybitIcon.vue'

const store = useStepsStore()

const { ipAddress, copyAddress, joinToMarket } = store

const onSelectStock = (e) => {
  data.value.market = e.target.value
}

const data = ref({
  market: 'binance',
  key: '',
  secret: ''
})

</script>

<style lang="scss">
  .step-two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 710px;
    height: 100%;
    padding: 22px 18px;
    color: $gray;

    @media screen and (max-width: 768px) {
      padding: 22px 5px;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    &__header {
      display: flex;
      width: 100%;
      margin: 0 0 20px 0;
    }

    &__paragraph {
      padding: 20px 0 8px 0;
      @include paragraph;
    }

    &__form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__stock-choice {
      display: flex;
      align-items: center;
      margin: 10px 0 20px 0;
      gap: 35px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    &__radio-button {
      width: 100%;
      max-width: 278px;
      .checkbox-button__body {
        height: 109px;
      }

      img {
        pointer-events: none;
      }
    }

    &__how-to-create {
      &.app-link {
        color: $green;
      }
    }

    &__confirm {
      max-width: 208px;
      margin: 28px auto 32px auto;
    }
  }

</style>
