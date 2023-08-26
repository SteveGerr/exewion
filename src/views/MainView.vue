<template>
  <div class="main">
    <AppHeader></AppHeader>
    <div class="main__body">
        <AppSidebar class="main__sidebar" :items="sidebarItems" :current="route.path">
        </AppSidebar>
        <div class="main__content">
          <RouterView></RouterView>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import AppHeader from '@/components/header/AppHeader.vue'
import RocketIcon from '@/components/icons/RocketIcon.vue'
import ManIcon from '@/components/icons/ManIcon.vue'
import BagIcon from '@/components/icons/BagIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import ChipIcon from '@/components/icons/ChipIcon.vue'

const route = useRoute()

const sidebarItems = [
  {
    id: 1,
    icon: RocketIcon,
    route: '/start',
    active: false
  },
  {
    id: 2,
    icon: ChipIcon,
    route: '/stock',
    active: true
  },
  {
    id: 3,
    icon: BagIcon,
    route: '/portfolio',
    active: false
  },
  {
    id: 4,
    icon: WalletIcon,
    route: '/wallet',
    active: false
  },
  {
    id: 5,
    icon: ManIcon,
    route: '/profile',
    active: false
  }
]
</script>
<style lang="scss" scoped>
  .main {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    overflow-x: auto;

    &__body {
      display: flex;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      margin: 7px 0 35px 0;
      gap: 40px;
    }

    &__content {
      width: 100%;
      height: 100%;
      margin: 0 0 30px 0;
    }

    &__sidebar {
      height: 100%;
      margin: 0 0 0 8px;
      &.app-wrapper {
        padding: 8px 11px;
      }
    }
  }
</style>
