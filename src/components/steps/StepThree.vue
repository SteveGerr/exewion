<template>
  <div class="step-three">
      <div class="step-three__wrapper">
        <RocketIcon class="step-three__rocket" />
        <Progressbar class="step-three__progressbar" :percent="percent" :value="ProgressValue"></Progressbar>
        <p class="step-three__text">осталось совсем немного</p>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Progressbar from '@/components/progressbar/ProgressBar.vue'
import { useStepsStore } from '@/store/store'
import RocketIcon from '@/components/icons/RocketIcon.vue'

const store = useStepsStore()

const { changeStep } = store

const ProgressValue = ref(50)
const percent = ref(50)

setInterval(() => {
  ProgressValue.value += 10
  percent.value += 10
}, 1000)

setTimeout(() => {
  changeStep()
}, 5000)

</script>

<style lang="scss">
  .step-three {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 710px;
    color: $gray;

    &__rocket {
      width: 51px;
      height: 73px;
      margin: 0 0 35px 0;
      stroke: $white;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 19.5rem 0 25rem 0;
    }

    &__progressbar {
      max-width: 595px;
    }

    &__text {
      margin: 5px 0 0 0;
      @include paragraph;
      text-decoration: underline;
    }
  }

</style>
