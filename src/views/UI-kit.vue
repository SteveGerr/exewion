<template>
  <div class="ui-kit">
    <AppHeader></AppHeader>
    <AppWrapper>
      <AppSidebar>
      </AppSidebar>
    </AppWrapper>
    <AppWrapper class="form">
      <h2>Form</h2>
      <AppButton purple ultraLarge>
        ultra large purple
      </AppButton>
      <AppButton green large>
        large
      </AppButton>
      <AppButton orange middle>
        middle orange
      </AppButton>
      <AppButton green small>
        small
      </AppButton>
      <form @submit.prevent>
        <AppInput v-model="email" placeholder="Введите ваш E-mail"></AppInput>
        <p v-if="!emailValid(email) && email.length > 5">Email is inwaild</p>
        <AppButton @on-click="sendMail" orange middle :disabled="!emailValid(email)">
          register
        </AppButton>
      </form>
    </AppWrapper>
    <ProgressBar simple :value="50"></ProgressBar>
    <ProgressBar :value="50"></ProgressBar>
    <AppSteps :current="2"></AppSteps>
    <AppBadge>BTC (Bitcoin)</AppBadge>
    <AppRange v-model="rangeValue"></AppRange>
    <AppSelect :options="options" @input="showOption"></AppSelect>
    <AppTable :headers="headers" :keys="keyValues" :data="datas" />
    <CircleCount :value="30"></CircleCount>
    <AppSidebar :items="sidebarItems"></AppSidebar>
    <AppHeading>Heading</AppHeading>
    <AppHeading uppercase>Heading uppercase</AppHeading>
    <Rocket></Rocket>
    <AppWidget heading="выделенный баланс">
      <template #icon>
        <WalletIcon stroke="white" height="14"></WalletIcon>
      </template>
    </AppWidget>
    <AppWidget heading="стоимость портфеля сегодня" :number="1012">
      <template #icon>
        <DiagramIcon fill="white" height="14"></DiagramIcon>
      </template>
    </AppWidget>
    <AppWidget heading="прирост баланса" :percent="1.2" :number="10" purple>
      <template #icon>
        <ThunderIcon stroke="white" height="14"></ThunderIcon>
      </template>
    </AppWidget>
    <AppWidget heading="прогноз стоимости через год" :number="111200" green>
      <template #icon>
        <DiagramIcon fill="white" height="14"></DiagramIcon>
      </template>
    </AppWidget>
    <Form @submit.prevent>
      <RadioButton :id="2" @onChange="onChange">
        <Binance></Binance>
      </RadioButton>
      <RadioButton :id="1">
        <img :src="Bybit" alt="">
      </RadioButton>
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/buttons/AppButton.vue'
import AppInput from '@/components/inputs/AppInput.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import AppHeader from '@/components/header/AppHeader.vue'
import ProgressBar from '@/components/progressbar/ProgressBar.vue'
import AppSteps from '@/components/steps/AppSteps.vue'
import AppBadge from '@/components/badge/AppBadge.vue'
import AppRange from '@/components/range/AppRange.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppTable from '@/components/table/AppTable.vue'
import CircleCount from '@/components/circleCount/CircleCount.vue'
import RocketIcon from '@/components/icons/RocketIcon.vue'
import ManIcon from '@/components/icons/ManIcon.vue'
import BagIcon from '@/components/icons/BagIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import ChipIcon from '@/components/icons/ChipIcon.vue'
import AppHeading from '@/components/heading/AppHeading'
import AppWidget from '@/components/widget/AppWidget.vue'
import DiagramIcon from '@/components/icons/DiagrammIcon.vue'
import ThunderIcon from '@/components/icons/ThunderIcon.vue'
import RadioButton from '@/components/radioButton/RadioButton.vue'
import Binance from '@/components/icons/BinanceIcon.vue'
import Bybit from '@/assets/svg/bybit.svg'

const email = ref('')
const rangeValue = ref(10)
const options = ref([])

options.value = [
  1,
  2,
  3
]

const headers = ['дата и время', 'тип', 'колличество']
const keyValues = ['name', 'type', 'count']
const datas = [
  { name: '19/08/2023 12:00', type: 'Ввод', count: '12220 USDT' },
  { name: '19/08/2023 12:00', type: 'Ребалансировка', count: '12220 USDT' }
]

const sidebarItems = [
  {
    id: 1,
    icon: RocketIcon,
    route: '/login',
    active: false
  },
  {
    id: 2,
    icon: ChipIcon,
    route: '/login',
    active: true
  },
  {
    id: 3,
    icon: BagIcon,
    route: '/login',
    active: false
  },
  {
    id: 4,
    icon: WalletIcon,
    route: '/login',
    active: false
  },
  {
    id: 5,
    icon: ManIcon,
    route: '/login',
    active: false
  }
]

const sendMail = () => {
  console.log(email.value)
}

const emailValid = (email) => {
  return /^[^@]+@\w+(\.\w+)+\w$/.test(email)
}

const showOption = (e) => {
  console.log(e)
}

const onChange = (e) => {
  console.log(e.target.checked)
}

</script>
<style lang="scss" scoped>
  .ui-kit {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;

    form {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        text-align: center;
        @include text(20px, normal, 600);
        color: $white;
      }
    }

    p {
      font-size: 18px;
      color: $white;
    }

    .rocket {
      stroke: $white;

      &:hover {
        stroke: $green-light;
      }
    }

  }
</style>
