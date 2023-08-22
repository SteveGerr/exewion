
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
                        <span v-if="typeof key === 'object'">
                          {{ key }}
                            {{ reduceTableItems(item, key) }}
                        </span>
                        <span v-else>{{ item[key] }}</span>
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
<style lang="scss" soped>
.app-table {
  position: relative;
  overflow-x: auto;
  color: $white;
  background-color: $background-color;

  &__main {
    border-collapse: collapse;
  }

  &__head {
    @include text(15px, 28px, 400);
    text-transform: lowercase;
    color: $lilac;

    tr {
      border-bottom: 1px solid $lilac-back;
    }
  }

  &__head-item {
    text-align: left;
  }

  &__body-item {
    padding: 12px 0 12px 0;
    &:not(:last-child) {
      padding: 12px 30px 12px 0;
    }
    @include text(17px, 28px, 400);
    color: $white;
  }
}
</style>
