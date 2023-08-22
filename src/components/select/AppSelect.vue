<template>
  <div class="select" :tabindex="tabindex" @blur="open = false">
    <div class="select__selected" :class="{ open: open }" @click="open = !open">
      <img class="select__arrow" :src="arrow" alt="">
      {{ selected }}
    </div>
    <div class="select__options" :class="{ selectHide: !open }">
      <div
        class="select__option"
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, ref, onMounted } from 'vue'
import arrow from '@/assets/svg/arrow-down.svg'

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

.select {
  position: relative;
  width: 100%;
  height: 42px;
  @include text(15px, normal, 600);
  letter-spacing: 0.325px;
  text-align: left;
  line-height: 47px;
  border-radius: 10px;
  outline: none;

  &__arrow {
    position: absolute;
    top: 22px;
    right: 1em;
    width: 9px;
    height: 5px;
  }

  &__selected {
    background-color: $lilac-back;
    border-radius: 10px;
    border: none;
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    &.open {
      border: 1px solid $purple;
      border-radius: 6px 6px 0px 0px;
    }
  }

  &__options {
    position: absolute;
    left: 0;
    right: 0;
    color: #fff;
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
    border-right: 1px solid $purple;
    border-left: 1px solid $purple;
    border-bottom: 1px solid $purple;
    background-color: $lilac-back;
    z-index: 1;
  }

  &__option {
    padding-left: 1em;
    color: #fff;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: $lilac-light;
    }
  }

}

.selectHide {
  display: none;
}
</style>
