!<template>
  <button
    :class="['app-button',
      {
        'green': green,
        'purple': purple,
        'orange': orange,
        'large': large,
        'ultra-large': ultraLarge,
        'middle': middle,
        'small': small,
        'arrows': register || login,
        'transparent': transparent,
        'disabled': disabled
      }
      ]"
      @click="$emit('onClick')"
      >
      <ArrowsRightIcon v-if="register" class="app-button__arrow-left" />
      <ArrowRightIcon v-if="login" class="app-button__arrow-left" />
      <slot></slot>
      <ArrowsRightIcon v-if="register" class="app-button__arrow-right" />
      <ArrowRightIcon v-if="login" class="app-button__arrow-right" />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import ArrowsRightIcon from '@/components/icons/ArrowsRightIcon.vue'

defineProps({
  green: Boolean,
  purple: Boolean,
  orange: Boolean,
  register: Boolean,
  login: Boolean,
  large: Boolean,
  ultraLarge: Boolean,
  middle: Boolean,
  small: Boolean,
  transparent: Boolean,
  disabled: Boolean
})

defineEmits(['onClick'])
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 15px;
  width: 100%;
  border-radius: 100px;
  border: none;
  outline: none;
  @include text(18px, normal, 600);
  color: $white;
  text-transform: uppercase;
  transition: all .4s ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    transition: all .4s ease-in-out;

    &.green {
      box-shadow: 0px 0px 25px 0px $green;
    }

    &.purple {
      box-shadow: 0px 0px 25px 0px $purple;
    }

    &.orange {
      box-shadow: 0px 0px 25px 0px $orange;
    }
  }

  &.green {
    box-shadow: 0px 0px 16px 0px $green;
    background: $green;
  }

  &.purple {
    box-shadow: 0px 0px 16px 0px $purple;
    background: $purple;
  }

  &.orange {
    box-shadow: 0px 0px 16px 0px $orange;
    background: $orange;
  }

  &.arrows {
    justify-content: space-between;
  }

  &__arrow-left {
    margin-right: 3rem;
  }

  &__arrow-right {
    margin-left: 3rem;
  }

  &.ultra-large {
    height: 72px;
  }
  &.large {
    height: 60px;
  }
  &.middle {
    height: 51px;
  }
  &.small {
    height: 42px;
  }

  &.transparent {
    padding: 0;
    background-color: transparent;
    border: none;
  }

  &.disabled {
    background-color: $gray;
    pointer-events: none;
  }
}
</style>
