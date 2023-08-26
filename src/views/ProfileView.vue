<template>
  <div class="profile">
    <AppWrapper class="profile__balance">
      <AppHeading>Баланс и платежи</AppHeading>
      <div class="profile__row profile__row_first">
        <div class="profile__col">
          <img class="profile__symbol" :src="symbol" alt="">
          <p class="profile__balance-value">{{ '0.0' }}</p>
        </div>
        <div class="profile__copy-address">
          <AppButton middle green>КОПИРОВАТЬ АДРЕС</AppButton>
          <p class="profile__label">комиссия 2 USDT</p>
        </div>
      </div>
      <div class="profile__row">
        <AppTable
          :headers="['дата и время', 'тип', 'колличество']"
          :data="datas"
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
            placeholder="Введите ваш пароль"
            label="текущий пароль"
            purple
          >
          </AppInput>
          <AppInput
            placeholder="Введите новый пароль"
            label="новый пароль"
            purple
          >
          </AppInput>
          <AppInput
            placeholder="Введите новый пароль еще раз"
            label="повторите новый пароль"
            purple
          >
          </AppInput>
        </div>
        <div class="profile__form-buttons">
          <AppButton class="profile__save" middle green>СОХРАНИТЬ ИЗМЕНЕНИЯ</AppButton>
          <AppButton class="profile__cancel" middle orange>ОТМЕНИТЬ</AppButton>
        </div>
      </form>
    </AppWrapper>
  </div>
</template>

<script setup>
import AppHeading from '@/components/heading/AppHeading.vue'
import AppTable from '@/components/table/AppTable.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import symbol from '@/assets/svg/green-circle-T.svg'
import AppButton from '@/components/buttons/AppButton.vue'
import AppInput from '@/components/inputs/AppInput.vue'

const keyValues = ['date', 'type', 'sum']
const datas = [
  { date: '19/08/2023 12:00', type: 'Ввод', sum: '12220 USDT' },
  { date: '19/08/2023 12:00', type: 'Ребалансировка', sum: '12220 USDT' }
]

</script>

<style lang="scss" scoped>

.profile {
  display: flex;
  align-items: flex-start;
  gap: 30px;

  @media screen and (max-width: 1155px) {
    flex-wrap: wrap;
  }

  &__row {
    display: flex;

    &_first {
      margin: 0 0 28px 0;
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
  }

  &__form-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 15px;
  }

  &__password {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 518px;

    @media screen and (max-width: 1155px) {
      max-width: 495px;
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
