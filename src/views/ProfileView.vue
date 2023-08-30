<template>
  <div class="profile">
    <AppWrapper class="profile__balance">
      <AppHeading>Баланс и платежи</AppHeading>
      <div class="profile__row profile__row_first">
        <div class="profile__col">
          <SymbolCircleIcon class="profile__symbol" />
          <p class="profile__balance-value">{{ balanceValue }}</p>
        </div>
        <div class="profile__copy-address">
          <AppButton middle green>КОПИРОВАТЬ АДРЕС</AppButton>
          <p class="profile__label">комиссия 2 USDT</p>
        </div>
      </div>
      <div class="profile__row">
        <AppTable
          :headers="['дата и время', 'тип', 'колличество']"
          :data="balanceHistoryData"
          :keys="keyValues"
          :td-class="'table__td'"
        >
      </AppTable>
      </div>
    </AppWrapper>
    <AppWrapper class="profile__password">
      <AppHeading class="profile__password-heading">Смена пароля</AppHeading>
      <form class="profile__form" @submit.prevent>
        <div class="profile__form-inputs">
          <AppInput
            v-model="passwords.currentPassword"
            placeholder="Введите ваш пароль"
            label="текущий пароль"
            purple
          >
          </AppInput>
          <AppInput
            v-model="passwords.newPassword"
            placeholder="Введите новый пароль"
            label="новый пароль"
            purple
          >
          </AppInput>
          <AppInput
            v-model="passwords.newPasswordAgain"
            placeholder="Введите новый пароль еще раз"
            label="повторите новый пароль"
            purple
          >
          </AppInput>
        </div>
        <div class="profile__form-buttons">
          <AppButton class="profile__save" @on-click="changePass(passwords)" middle green>СОХРАНИТЬ ИЗМЕНЕНИЯ</AppButton>
          <AppButton class="profile__cancel" @on-click="reset" middle orange>ОТМЕНИТЬ</AppButton>
        </div>
      </form>
    </AppWrapper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStepsStore } from '@/store/store'
import AppHeading from '@/components/heading/AppHeading.vue'
import AppTable from '@/components/table/AppTable.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import SymbolCircleIcon from '@/components/icons/SymbolCircleIcon.vue'
import AppButton from '@/components/buttons/AppButton.vue'
import AppInput from '@/components/inputs/AppInput.vue'

const store = useStepsStore()

const { changePass } = store
const { balanceHistoryData, balanceValue } = storeToRefs(store)

// ключи таблицы, нужны для итерации
const keyValues = ['date', 'type', 'sum']

const passwords = ref({
  currentPassword: '',
  newPassword: '',
  newPasswordAgain: ''
})

const reset = () => {
  passwords.value.currentPassword = ''
  passwords.value.newPassword = ''
  passwords.value.newPasswordAgain = ''
}

</script>

<style lang="scss" scoped>

.profile {
  display: flex;
  align-items: flex-start;
  gap: 30px;

  @media screen and (max-width: 1155px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &__row {
    display: flex;

    &_first {
      margin: 0 0 28px 0;

      @media screen and (max-width: 530px){
        flex-direction: column;
        align-items: center;
      }
    }
  }

  &__col {
    display: flex;
    align-items: center;
  }

  .app-wrapper {
    padding: 16px 20px;
  }

  .heading {
    margin: 0 0 16px 0;
  }

  &__balance {
    &.app-wrapper {
      flex-direction: column;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  &__balance-value {
    @include text(25px, 24px, 600);
    letter-spacing: -0.3px;
    color: $white;
  }

  &__symbol {
    width: 114px;
    height: 114px;
    margin: 0 0 0 20px;
  }

  &__label {
    margin: 5px 0 0 0;
    @include text(14px, normal, 500);
    letter-spacing: 0.325px;
    color: $carrot;
  }

  &__copy-address {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0 0 8px 70px;

    @media screen and (max-width: 530px){
      margin: 20px 0 8px 0;
    }
  }

  &__form-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 15px;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  &__password {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 518px;

    @media screen and (max-width: 1155px) {
      max-width: 495px;
    }

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  &__password-heading {
    &.heading {
      margin: 0 0 22px 0;
    }
  }

  &__form-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 0 40px 0;
  }

  &__save {
    width: 260px;
  }

  &__cancel {
    width: 178px;
  }

}

</style>
<style lang="scss">
  .profile {
    .app-table__body-item-value {
      justify-content: flex-start;
    }

    .app-table__head-item {
      text-align: left;
    }
    .app-input__label {
      text-transform: lowercase;
    }
  }
</style>
