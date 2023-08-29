<template>
  <header>
    <nav class="navbar">
      <div class="navbar__left">
        <AppButton @on-click="showMenu = !showMenu" class="navbar__burger" transparent>
          <img :src="burger" alt="">
        </AppButton>
        <img class="navbar__logo" :src="exewion" alt="">
        <AppButton class="navbar__exit mobile" transparent>
          <img class="navbar__exit-icon" :src="exitSvg" alt="">
        </AppButton>
      </div>
      <div class="navbar__right">
        <AppWrapper class="navbar__select-langauge">
          <SelectLanguage :options="['ru', 'eng']"></SelectLanguage>
        </AppWrapper>
        <AppWrapper>
          <AppButton class="navbar__notification" transparent>
          <img v-if="false" :src="bell" alt="">
          <img v-if="true" :src="bellAcive" alt="">
          <p class="navbar__notification-count">11</p>
        </AppButton>
        </AppWrapper>
        <AppWrapper>
          <div class="navbar__balance">
            <div class="navbar__symbol">
              <img :src="tSymbol" alt="">
            </div>
            <div class="navbar__balance-value">850 USDT</div>
            <AppButton class="navbar__balance-plus" transparent>
              <img :src="plus" alt="">
            </AppButton>
          </div>
        </AppWrapper>
        <AppWrapper class="navbar__status">
          <div class="navbar__status-wrapper">
            <div class="navbar__status-icon">
              <img v-if="true" :src="man" alt="">
              <img v-if="false" :src="manActive" alt="">
            </div>
            <div class="navbar__values">
              <p class="navbar__sum">00000500</p>
              <p class="navbar__growth">
                <img :src="arrowsUp" alt="">
                100
              </p>
            </div>
          </div>
        </AppWrapper>
        <AppButton class="navbar__exit" transparent>
          <img class="navbar__exit-icon" :src="exitSvg" alt="">
        </AppButton>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import AppButton from '@/components/buttons/AppButton.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import SelectLanguage from '@/components/select/SelectLanguage.vue'
import exitSvg from '@/assets/svg/exit-icon.svg'
import exewion from '@/assets/svg/exewion.svg'
import burger from '@/assets/svg/burger.svg'
import man from '@/assets/svg/man.svg'
import manActive from '@/assets/svg/man-active.svg'
import bell from '@/assets/svg/bell.svg'
import bellAcive from '@/assets/svg/bell-active.svg'
import tSymbol from '@/assets/svg/green-circle-T.svg'
import plus from '@/assets/svg/green-circle-plus.svg'
import arrowsUp from '@/assets/svg/green-arrows-up.svg'

const showMenu = ref(false)

</script>
<style lang="scss" scoped>
  header {
    width: 100%;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1px 24px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 12px;
    }

    &__left {
      display: flex;
      align-items: center;
      gap: 20px;

      @media screen and (max-width: 768px) {
        justify-content: space-between;
        width: 100%;
        margin: 0 0 20px 0;
      }
    }

    &__right {
      display: flex;
      gap: 13px;

      @media screen and (max-width: 768px) {
        justify-content: center;
        gap: 7px;

        &.show {
          display: flex;

          .app-wrapper {
            justify-content: center;
            max-width: max-content;
          }
        }
      }

      &.mobile {
        display: none;
      }
      &.mobile.active {
        display: flex;
        flex-direction: column;
      }
    }

    &__burger {
      display: flex;
      &.app-button {
        width: 29px;
        height: 16px;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    &__exit {
      padding: 10px;
      @media screen and (max-width: 768px) {
        display: none;
        max-width: 60px;
      }

      &.mobile {
        display: none;

        @media screen and (max-width: 768px) {
          display: flex;
          justify-content: flex-end;
          max-width: 50px;
        }
      }
    }

    &__exit-icon {
      @media screen and (max-width: 768px) {
        width: 20px;
      }

    }

    &__status {
      padding: 8px
    }

   &__select-langauge {
    padding: 8px 17px;

    @media screen and (max-width: 768px) {
      display: none;
    }
   }

   &__notification-count {
    margin: 0 0 0 4px;
    @include text(16px, 24px, 600);
    letter-spacing: -0.3px;

    @media screen and (max-width: 768px) {
      @include text(12px, 14px, 600);
    }
   }

    &__status-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 47px;
      height: 47px;
      margin: 0 10px 0 0;
      border-radius: 50%;
      background-color: $purple-light;

      @media screen and (max-width: 768px) {
        width: 27px;
        height: 27px;
        margin: 0 5px 0 0;
      }
    }

    &__status-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__growth {
      display: flex;
      flex-wrap: nowrap;
      @include text(16px, 25px, 600);
      letter-spacing: 0.286px;
      color: $white;
      white-space: nowrap;

      @media screen and (max-width: 768px) {
       @include text(12px, 15px, 400);
      }
    }

    &__sum {
      @include text(17px, 23px, 400);
      letter-spacing: -0.336px;
      color: #6B4F9C;

      @media screen and (max-width: 768px) {
       @include text(12px, 13px, 400);
      }
    }

    &__symbol {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 45px;
      }

      @media screen and (max-width: 768px) {
        img {
          width: 25px;
        }
      }
    }

    &__balance {
      display: flex;
    }

    &__balance-value {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      margin: 0 7px 0 0;
      @include text(16px, 24px, 600);
      letter-spacing: -0.3px;
      color: $white;
      white-space: nowrap;

      @media screen and (max-width: 768px) {
        @include text(12px, 14px, 600);
      }
    }

    &__balance-plus {
      max-width: 12px;
    }

  }
</style>
