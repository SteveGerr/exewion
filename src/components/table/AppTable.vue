
<template>
    <div class="app-table">
        <table class="app-table__main"
        >
            <thead class="app-table__head"
            >
                <tr>
                    <th
                        v-for="(header, i) in headers"
                        :key="i"
                        class="app-table__head-item"
                    >
                        {{ header }}
                    </th>
                    <slot name="th"></slot>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="app-table__row"
                    v-for="(item, i) in data"
                    :key="i"
                >
                <td v-for="(key, i) in keys" :key="i" class="app-table__body-item">
                      <div :class="['app-table__body-item-value']">
                        <div v-if="key === 'coinName'" class="app-table__cirle"></div>
                        <span v-if="typeof key === 'object'">
                          {{ key }}
                            {{ reduceTableItems(item, key) }}
                        </span>
                        <span v-else>{{ item[key] }}</span>
                      </div>
                  </td>
                    <slot name="td" :item="item"></slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  headers: Array,
  data: Array,
  keys: Array
})

const reduceTableItems = (obj, path) => {
  return path.reduce((prev, key) => {
    return prev?.[key]
  }, obj)
}
</script>
<style lang="scss">
.app-table {
  width: 100%;
  position: relative;
  color: $white;
  background-color: $background-color;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }

  &__main {
    border-collapse: collapse;
    width: 100%;

    th, td {
      padding: 8px;
      text-align: center;
    }
  }

  &__head {
    @include text(15px, 28px, 400);
    text-transform: lowercase;
    color: $lilac;
  }

  &__row {
    td:nth-child(2n+1) {
      color: $table-td-lilac;
    }
  }

  &__head-item {
    text-align: center;
  }

  &__body-item {
    position: relative;
    max-height: 39px;
    border-top: 1px solid $lilac-back;

    @include text(17px, 28px, 400);
    color: $white;
  }

  &__body-item-value {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 8px;
    white-space: nowrap;
  }

  &__cirle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: $lilac-back;
  }
}
</style>
