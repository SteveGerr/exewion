<template>
  <div class="select-language" :tabindex="tabindex" @blur="open = false">
    <AppButton class="select-language__button" @onClick="open = !open" transparent>
      <img class="select-language__flag" :src="flag" alt="">
      <p class="select-language__button-text">{{ selected }}</p>
      <img :src="arrow" alt="">
    </AppButton>
    <div
      :class="['select-language__list', {
        selectHide: !open
      }]"
    >
      <ul>
        <li
          class="select-language__option"
          v-for="(option, i) of options"
          :key="i"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
          "
         >
         {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue'
import flag from '@/assets/svg/flagRF.svg'
import arrow from '@/assets/svg/arrow-down.svg'
import AppButton from '@/components/buttons/AppButton.vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  defaultValue: {
    type: String,
    required: false,
    default: null
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0
  }
})

const emit = defineEmits(['input'])

const selected = ref()
const open = ref(false)

selected.value = props.defaultValue || (props.options.length > 0 ? props.options[0] : null)

onMounted(() => {
  emit('input', selected)
})
</script>
<style lang="scss" scoped>
  .select-language {
    display: flex;
    position: relative;

    &__button {
      display: flex;
      align-items: center;
    }

    &__button-text {
      margin: 0 7px 0 0;
      @include text(16px, 24px, 600);
      letter-spacing: -0.3px;
      color: $white;
    }

    &__flag {
      width: 26px;
      height: 17px;
      margin: 0 1.2rem 0 0;
    }

    &__list {
      display: flex;
      flex-direction: column;
      padding: 5px;
      position: absolute;
      top: 45px;
      right: 0;
      border: $border-dark-purple;
      background-color: $background-color;
      @include text(2.5rem, 100%, 600);
      color: $gray;

      ul {
        text-align: center;
      }
    }

    &__option {
      padding: 2px;
      cursor: pointer;

      &:hover {
        color: $orange;
      }
    }
  }

  .selectHide {
  display: none;
}
</style>
