<template>
  <header>
    <nav class="navbar">
      <div class="navbar__left">
        <AppButton @on-click="showMenu = !showMenu" class="navbar__burger" transparent>
          <BurgerIcon />
        </AppButton>
        <ExewionIcon class="navbar__logo" />
        <AppButton class="navbar__exit mobile" @on-click="onLogOut" transparent>
          <ExitIcon class="navbar__exit-icon" />
        </AppButton>
      </div>
      <div class="navbar__right">
        <AppWrapper class="navbar__select-langauge">
          <SelectLanguage :options="['ru', 'eng']"></SelectLanguage>
        </AppWrapper>
        <AppWrapper class="navbar__notifications-wrapper">
          <AppButton
            class="navbar__notification"
            transparent
            @on-click="showNotifications = !showNotifications"
          >
            <BellIcon :active="true" />
            <p class="navbar__notification-count">{{ notifications.length }}</p>
          </AppButton>
          <transition name="list">
            <AppNotifications class="navbar__notifications" :show="showNotifications">
              <transition-group name="list">
                <AppNotice
                  v-for="item in notifications"
                  :key="item.id"
                  :status="item.status"
                  @remove="removeNotice(item.id)"
                >
                  {{ item.text }}
                </AppNotice>
              </transition-group>
            </AppNotifications>
          </transition>
        </AppWrapper>
        <AppWrapper>
          <div class="navbar__balance">
            <div class="navbar__symbol">
              <SymbolCircleIcon class="navbar__symbol-svg" />
            </div>
            <div class="navbar__balance-value">{{ balanceValue }} USDT</div>
            <AppButton class="navbar__balance-plus" transparent>
              <PlusGreenCircleIcon />
            </AppButton>
          </div>
        </AppWrapper>
        <AppWrapper class="navbar__status">
          <div class="navbar__status-wrapper">
            <div class="navbar__status-icon">
              <ManIconDinamic :active="true" />
            </div>
            <div class="navbar__values">
              <p class="navbar__sum">00000500</p>
              <p class="navbar__growth">
                <ArrowsUpIcon class="navbar__growth-arrows" />
                100
              </p>
            </div>
          </div>
        </AppWrapper>
        <AppButton class="navbar__exit" @on-click="onLogOut" transparent>
          <ExitIcon class="navbar__exit-icon" />
        </AppButton>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { useStepsStore } from '@/store/store'
import AppButton from '@/components/buttons/AppButton.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import SelectLanguage from '@/components/select/SelectLanguage.vue'
import ExewionIcon from '@/components/icons/ExewionIcon.vue'
import PlusGreenCircleIcon from '@/components/icons/PlusGreenCircleIcon.vue'
import ArrowsUpIcon from '@/components/icons/ArrowsUpIcon.vue'
import BellIcon from '@/components/icons/BellIcon.vue'
import SymbolCircleIcon from '@/components/icons/SymbolCircleIcon.vue'
import ManIconDinamic from '@/components/icons/ManIconDinamic.vue'
import ExitIcon from '@/components/icons/ExitIcon.vue'
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import { storeToRefs } from 'pinia'
import AppNotifications from '../notifications/AppNotifications.vue'
import AppNotice from '@/components/notifications/AppNotice.vue'

const { onLogOut, removeNotice } = useStepsStore()

const store = useStepsStore()

const { notifications, balanceValue } = storeToRefs(store)

const showMenu = ref(false)

const showNotifications = ref(false)

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
   &__notification {
    position: relative;
   }

   &__notification-count {
    margin: 0 0 0 4px;
    @include text(16px, 24px, 600);
    letter-spacing: -0.3px;

    @media screen and (max-width: 768px) {
      @include text(12px, 14px, 600);
    }
   }

   &__notifications-wrapper {
    position: relative;
   }

   &__notifications {
      max-height: 100vh;
      padding: 10px 0 0 0;
      position: absolute;
      top: 64px;
      right: calc(50% - 80px);
      overflow-x: hidden;
      overflow-y: auto;
      z-index: 100;

      &::-webkit-scrollbar {
        width: 3px;
      }

      &::-webkit-scrollbar-track {
        background: $border-dark-purple;
      }

      ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 20px;
        border: 3px solid $gray;
      }

    @media screen and (max-width: 700px){
      top: 45px;
      right: auto;
      left: calc(50% - 40px);
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
      align-items: center;
      flex-wrap: nowrap;
      @include text(16px, 25px, 600);
      letter-spacing: 0.286px;
      color: $white;
      white-space: nowrap;

      @media screen and (max-width: 768px) {
       @include text(12px, 15px, 400);
      }

      &-arrows {
        margin: 3px 0 0 0;

        @media screen and (max-width: 768px) {
          margin: 1px 0 0 0;
          width: 12px;
          height: 15px;
        }
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

      &-svg {
        width: 45px;
        height: 45px;
      }

      @media screen and (max-width: 768px) {
        &-svg {
          width: 25px;
          height: 25px;
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
      @media screen and (max-width: 768px) {
        max-width: 12px;
      }
    }

  }

  .list-enter-active, .list-leave-active {
      transition: all 1s;
    }
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
</style>
