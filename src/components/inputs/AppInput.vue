<template>
  <div :class="['app-input', {purple: purple}]">
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
        step="0.01"
        :pattern="pattern"
        :min="min"
        :inputmode="inputmode"
        :tabindex="tabindex"
        :valid="valid"
        :validText="validText"
      />
      <AppButton
        v-if="copy"
        @on-click="$emit('onCopy')"
        class="app-input__copy"
        small
        green
        >
        copy
      </AppButton>
    </label>
    <span v-if="!valid" class="app-input__valid-text">{{ validText }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import AppLink from '@/components/links/AppLink.vue'
import AppButton from '../buttons/AppButton.vue'

defineProps({
  modelValue: String,
  placeholder: String,
  label: String,
  type: String,
  forgot: Boolean,
  purple: Boolean,
  copy: Boolean,
  pattern: String,
  min: Number,
  inputmode: String,
  tabindex: Number,
  valid: Boolean,
  validText: String
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
  position: relative;

  &.purple {
    .app-input__input {
      background: $lilac-back;
      @include text(18px, normal, 500);
      color: $white;
      &::placeholder {
        @include text(17px, normal, 500);
        color: $placeholder-purple;
      }
    }
  }

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
    padding: 7px;
    background: $white;
    @include text(18px, normal, 400);
    color: $dark-blue;
    border-radius: 10px;
    border: none;
    outline: none;

    &::placeholder {
      @include text(15px, normal, 400);
      letter-spacing: 0.325px;
      color: $gray;
    }

    @media (min-width: $bp-tablet) {
      padding: 9px;
      @include text(18px, normal, 400);

      &::placeholder {
        @include text(15px, normal, 400);
        letter-spacing: 0.325px;
        color: $gray;
      }
    }
  }

  &__copy {
    position: absolute;
    bottom: 1px;
    right: 0;
    max-width: 128px;
  }

  &__valid-text {
    position: absolute;
    bottom: -15px;
    left: 10px;
    @include text(12px, normal, 400);
    color: crimson;
  }
}

</style>
<style>
input[type = 'number']::-webkit-outer-spin-button,
input[type = 'number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type = 'number'] {
  -moz-appearance: textfield;
}
</style>
