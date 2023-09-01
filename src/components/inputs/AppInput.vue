<template>
  <div :class="['app-input', {purple: p.purple}]">
    <label for="input">
      <div class="app-input__label">
        {{ p.label }}
        <RouterLink v-if="p.forgot" class="app-input__forgot" :to="forgotLink">Забыли пароль?</RouterLink>
      </div>
      <input
        :id="p.id"
        class="app-input__input"
        :value="p.modelValue"
        @input="updateValue"
        @blur="onBlur"
        :type="p.type"
        :placeholder="p.placeholder"
        step="0.01"
        :pattern="p.pattern"
        :min="p.min"
        :max="p.max"
        :inputmode="p.inputmode"
        :tabindex="p.tabindex"
        :valid="p.valid"
        :validText="p.validText"
      />
      <AppButton
        v-if="p.copy"
        @on-click="$emit('onCopy')"
        class="app-input__copy"
        small
        green
        >
        copy
      </AppButton>
    </label>
    <span v-if="isInvalid" class="app-input__valid-text">{{ p.validText }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
// import AppLink from '@/components/links/AppLink.vue'
import AppButton from '../buttons/AppButton.vue'

const p = defineProps({
  id: String,
  modelValue: String,
  placeholder: String,
  label: String,
  type: String,
  forgot: Boolean,
  purple: Boolean,
  copy: Boolean,
  pattern: String,
  min: Number,
  max: Number,
  inputmode: String,
  tabindex: Number,
  valid: Boolean,
  validText: String,
  forgotLink: String
})

const emit = defineEmits(['update:modelValue', 'onBlur'])

const inputValue = ref('')
const isInvalid = ref(false)

const validation = () => {
  if (p.valid === false) {
    isInvalid.value = true
  } else {
    isInvalid.value = false
  }
}

// eslint-disable-next-line no-undef
const updateValue = (e) => {
  const el = e.target
  inputValue.value = el.value
  emit('update:modelValue', el.value)
}

const onBlur = () => {
  emit('onBlur')
  validation()
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

  &__forgot {
    text-transform: none;
    text-decoration: underline;
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
