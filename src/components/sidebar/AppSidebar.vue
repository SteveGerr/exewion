<template>
  <AppWrapper>
    <div class="sidebar">
      <SidebarItem v-for="item in items" :active="item.route === current" :key="item.id">
        <router-link :to="item.route">
          <component
            :class="['sidebar__icon', {'active': item.route === current}]"
            :is="item.icon">
          </component>
        </router-link>
      </SidebarItem>
    </div>
  </AppWrapper>
</template>

<script setup>
import { defineProps } from 'vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import SidebarItem from './SidebarItem.vue'

defineProps({
  items: Array,
  current: String
})
</script>
<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 62px;
  min-height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    max-width: auto;
  }

  &__icon {
    width: 25px;
    height: 25px;
    stroke: $lilac;

    &:hover,
    &.active {
      stroke: $white;
    }
  }
}
</style>
