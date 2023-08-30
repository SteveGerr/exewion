<template>
  <div class="login">
    <AppWrapper>
      <div class="login__buttons">
        <div class="login__logo">
          <LogoIcon class="login__logo-img" />
        </div>
        <div class="login__company-name">
          <ExewionIcon class="login__company-name-image" />
        </div>
        <div class="login__description">crypto portfolio in 3 minutes</div>
        <router-link class="login__register" to="/register">
          <AppButton green register middle>
            register
          </AppButton>
        </router-link>
        <router-link class="login__login" to="/login">
          <AppButton purple login middle>
            login
          </AppButton>
        </router-link>
      </div>
    </AppWrapper>
    <AppWrapper>
      <div class="login__form">
        <RocketIcon class="login__rocket" />
        <AppHeading class="login__register-title" uppercase>register</AppHeading>
        <div class="login__inputs">
          <AppInput v-model="user.email" :label="'e-mail'" placeholder="Введите ваш E-mail"></AppInput>
          <AppInput v-model="user.password" :label="'Пароль'" placeholder="Введите ваш пароль" type="password"></AppInput>
          <AppInput
            v-model="user.repeatPassword"
            :label="'ПОВТОРИТЕ Пароль'"
            :valid="checkPassword"
            :valid-text="'Пароли не совпадают'"
            placeholder="Введите ваш пароль еще раз"
            type="password"
            >
          </AppInput>
          <AppButton class="login__apply" @on-click="onRegister(user)" :disabled="!checkPassword" green middle>
            ПОДТВЕРДИТЬ
          </AppButton>
        </div>
      </div>
    </AppWrapper>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStepsStore } from '@/store/store'
import AppButton from '@/components/buttons/AppButton.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import RocketIcon from '@/components/icons/RocketIcon.vue'
import AppHeading from '@/components/heading/AppHeading.vue'
import ExewionIcon from '@/components/icons/ExewionIcon.vue'

const store = useStepsStore()

const { onRegister } = store

// eslint-disable-next-line no-unused-vars
const checkPassword = computed(() => user.value.password === user.value.repeatPassword)

const user = ref({
  email: '',
  password: '',
  repeatPassword: ''
})

</script>

<style lang="scss">
  .login {
    display: grid;
    grid-template-columns: 380px 2fr;
    height: 100vh;
    padding: 0 2rem 2rem;
    gap: 3rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: auto;
      height: auto;
      padding: 0;
    }

    &__logo {
      margin: 20px 0 43px 0;

      @media screen and (max-width: 768px) {
        margin: 0 0 43px 0;
      }
    }

    &__company-name-image {
      width: 100%;
      height: 30px;
      margin: 0 0 1.5rem 0;

      @media screen and (max-width: 768px) {
        height: 30px;
      }
    }

    &__description {
      margin: 0 0 6rem 0;
      @include text(14px, 22px, 300);
      letter-spacing: 1px;
      text-transform: uppercase;
      color: $white;
    }

    &__register {
      margin: 0 0 23px 0;
    }

    &__register,
    &__login {
      width: 100%;
      max-width: 220px;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 3rem;
      margin: 100px 0 0 0;

      @media screen and (max-width: 768px) {
        margin: 10px 0 0 0;
        order: 2;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 8rem 0 9rem 0;

      @media screen and (max-width: 768px) {
        order: 1;
      }

    }

    &__rocket {
      width: 51px;
      height: 73px;
      margin-bottom: 34px;
      stroke: $white;

      @media screen and (max-width: 768px) {
        margin-bottom: 24px;
      }
    }

    &__register-title {
      color: $white;
      text-align: center;

      &.heading {
        margin: 0 0 27px 0;
        @include text(30px, 28px, 400);

        &:after {
          bottom: -10px;
        }
      }
    }

    &__apply {
      max-width: 207px;
      margin: 45px 0 0 0;
    }

    &__green-line {
      width: 100%;
      max-width: 155px;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 380px;
      gap: 17px;
    }

  }
</style>
