<template>
  <div class="app-input">
    <label for="input">
      <div class="app-input__label">
        {{ label }}
        <AppLink v-if="forgot" :href="'#'">Забыли пароль?</AppLink>
      </div>
      <input
        id="input"
        class="app-input__input"
        :value="modelValue"
        @input="updateValue"
        :type="type"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import AppLink from '@/components/links/AppLink.vue'

defineProps({
  modelValue: String,
  placeholder: String,
  label: String,
  type: String,
  forgot: Boolean
})

const emit = defineEmits(['update:modelValue'])

// eslint-disable-next-line no-undef
const updateValue = (e) => {
  const el = e.target
  emit('update:modelValue', el.value)
}

</script>

<style lang="scss" scoped>
.app-input {
  display: flex;
  width: 100%;

  label {
    width: 100%;
  }

  &__label {
    display: flex;
    justify-content: space-between;
    margin: 0 0 6px 0;
    @include text(16px, 28px, 400);
    color: $lilac;
    text-transform: uppercase;
  }

  &__input {
    width: 100%;
    height: 45px;
    padding: 0.7rem;
    background: $white;
    @include text(3rem, 1.4rem, 600);
    color: $black;
    border-radius: 10px;
    border: none;
    outline: none;

    &::placeholder {
      @include text(14px, normal, 400);
      position: relative;
      bottom: calc(50% - 9px);
      letter-spacing: 0.325px;
      color: $gray;
    }

    @media (min-width: $bp-tablet) {
      padding: 9px;
      @include text(3.5rem, 1.4rem, 600);
    }
  }
}
</style>
