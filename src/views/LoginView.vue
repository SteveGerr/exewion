<template>
  <div class="login">
    <AppWrapper>
      <div class="login__buttons">
        <div class="login__logo">
          <RouterLink to="/start">
            <img class="login__logo-img" :src="Logo" alt="">
          </RouterLink>
        </div>
        <div class="login__company-name">
          <img class="login__company-name-image" :src="Exewion" alt="">
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
        <img class="login__rocket" :src="Rocket" alt="">
        <AppHeading class="login__register-title" uppercase>LOGIN</AppHeading>
        <div class="login__inputs">
          <AppInput :model-value="''" :label="'e-mail'" placeholder="Введите ваш E-mail"></AppInput>
          <AppInput :model-value="''" :label="'Пароль'" forgot placeholder="Введите ваш пароль" type="password"></AppInput>
          <AppButton class="login__apply" green middle>
            ПОДТВЕРДИТЬ
          </AppButton>
        </div>
      </div>
    </AppWrapper>
  </div>
</template>

<script setup>
import AppButton from '@/components/buttons/AppButton.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import Exewion from '@/assets/svg/exewion.svg'
import Logo from '@/assets/svg/logo-svg.svg'
import Rocket from '@/assets/svg/rocket.svg'
import AppHeading from '@/components/heading/AppHeading.vue'

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
      margin: 7.5rem 0 4.3rem 0;

    @media screen and (max-width: 768px) {
      margin: 0 0 4.3rem 0;
    }

      &-img {
        width: 24.2rem;

        @media screen and (max-width: 768px) {
          width: 8.2rem;
        }
      }
    }

    &__company-name-image {
      width: 24.2rem;
      margin: 0 0 1.5rem 0;
    }

    &__description {
      margin: 0 0 6rem 0;
      @include text(1.4rem, 2.2rem, 300);
      letter-spacing: 1px;
      text-transform: uppercase;
      color: $white;

      @media screen and (max-width: 768px) {
        margin: 0 0 3rem 0;
      }
    }

    &__register {
      margin: 0 0 2.3rem 0;
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
        margin: 0;
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
        padding: 3rem 0 9rem 0;
        order: 1;
      }

    }

    &__rocket {
      width: 51px;
      height: 73px;
      margin-bottom: 34px;

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
