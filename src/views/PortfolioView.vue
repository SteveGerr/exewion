<template>
  <div class="portfolio">
    <AppWrapper class="portfolio__wrapper">
      <AppHeading class="portfolio__heading">EWIO 30</AppHeading>
      <div class="portfolio__widgets">
        <AppWidget
          :heading="'выделенный баланс'"
          :number="1000"
          >
          <template #icon>
            <WalletIcon class="portfolio__icon"></WalletIcon>
          </template>
        </AppWidget>
        <AppWidget
          :heading="'стоимость портфеля сегодня'"
          :number="1020"
          >
          <template #icon>
            <DiagrammIcon class="portfolio__diagramm-icon"></DiagrammIcon>
          </template>
        </AppWidget>
        <AppWidget
          :heading="'прирост баланса'"
          :number="12"
          :percent="12"
          purple
          >
          <template #icon>
            <ThunderIcon class="portfolio__icon"></ThunderIcon>
          </template>
        </AppWidget>
        <AppWidget
          :heading="'прогноз стоимости через год'"
          :number="1000"
          green
          >
          <template #icon>
            <DiagrammIcon class="portfolio__diagramm-icon"></DiagrammIcon>
          </template>
        </AppWidget>
      </div>
      <div class="portfolio__rebalancing">
        <p class="portfolio__label">Дата следующей ребалансировки</p>
        <ProgressBar simple :value="50"></ProgressBar>
        <div class="portfolio__rebalancing-dates">
          <div class="portfolio__rebalancing-date">{{ '19/08/2023' }}</div>
          <div class="portfolio__rebalancing-days">{{ 26 }} д. осталось</div>
        </div>
      </div>
      <div class="portfolio__buttons">
        <AppButton green>РЕБАЛАНСИРОВАТЬ</AppButton>
        <AppButton orange>ПРОДАТЬ</AppButton>
      </div>
    </AppWrapper>
    <AppWrapper class="portfolio__wrapper">
      <AppHeading class="portfolio__heading">Портфель</AppHeading>
      <div class="portfolio__table-container">
        <CircleCount class="portfolio__circle-count" :value="30"></CircleCount>
        <div class="portfolio__tables">
          <AppTable class="portfolio__first-table" :headers="['#', 'монета', '%', 'сумма']" :data="datas" :keys="keyValues"></AppTable>
          <AppTable :headers="['#', 'монета', '%', 'сумма']" :data="datasSecond" :keys="keyValues"></AppTable>
        </div>
      </div>
    </AppWrapper>
  </div>
</template>

<script setup>
import AppWrapper from '@/components/wrapper/AppWrapper.vue'
import AppWidget from '@/components/widget/AppWidget.vue'
import AppHeading from '@/components/heading/AppHeading.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import DiagrammIcon from '@/components/icons/DiagrammIcon.vue'
import ThunderIcon from '@/components/icons/ThunderIcon.vue'
import ProgressBar from '@/components/progressbar/ProgressBar.vue'
import AppButton from '@/components/buttons/AppButton.vue'
import CircleCount from '@/components/circleCount/CircleCount.vue'
import AppTable from '@/components/table/AppTable.vue'

const keyValues = ['hash', 'coinName', 'percent', 'sum']
const datas = [
  { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' },
  { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' },
  { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' },
  { hash: '*', coinName: 'BTC', percent: '10%', sum: '0.01892' }
]
const datasSecond = [
  { hash: '20', coinName: 'BTC', percent: '20%', sum: '0.01892' },
  { hash: '21', coinName: 'BTC', percent: '20%', sum: '0.01892' },
  { hash: '22', coinName: 'BTC', percent: '20%', sum: '0.01892' },
  { hash: '23', coinName: 'BTC', percent: '20%', sum: '0.01892' }
]

</script>

<style lang="scss">
  .portfolio {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 24px;

    @media screen and (max-width: 1200px) {
      flex-wrap: wrap;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      max-width: min-content;

      @media screen and (max-width: 768px) {
        max-width: 100%;
      }

      &.app-wrapper {
        padding: 10px 20px;
      }
    }

    &__heading {
      &.heading {
        margin: 0 0 30px 0;
      }
    }

    &__icon {
      width: 22px;
      height: 14px;
      margin: auto;
      stroke: $white;
    }

    &__diagramm-icon {
      width: 14px;
      height: 17px;
      fill: $white;
    }

    &__widgets {
      display: grid;
      grid-template-columns: 190px 264px;
      grid-template-rows: 1fr 1fr;
      margin: 0 0 22px 0;
      gap: 15px;

      @media screen and (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: auto;
      }
    }

    &__label {
      margin: 0 0 10px 0;
      @include text(17px, 28px, 200);
      color: $white;
    }

    &__rebalancing-dates {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0 40px 0;
    }

    &__rebalancing-date {
      @include text(17px, 28px, 200);
      color: $white;
    }

    &__rebalancing-days {
      @include text(17px, 28px, 200);
      color: $lilac;
    }

    &__buttons {
      display: flex;
      margin: 0 0 38px 0;
      gap: 14px;
    }

    &__table-container {
      display: flex;

      @media screen and (max-width: 1340px) {
        flex-wrap: wrap;
      }
    }

    &__tables {
      display: flex;

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
      }
    }

    &__circle-count {
      margin: 0 35px 0 0;

      @media screen and (max-width: 768px) {
        margin: 0 auto 20px auto;
      }
    }

    &__first-table {
      margin: 0 43px 0 0;

      @media screen and (max-width: 768px) {
        margin: 0;
      }
    }
  }

</style>
