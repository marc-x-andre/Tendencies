<template>
  <n-space class="emotion-wheel" vertical>
    <n-calendar v-model:value="value" @update:value="handleUpdateValue" />
  </n-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { addDays } from "date-fns/esm";
import { useDailyEntriesStore } from "@/stores/daily-entries";

const entryStore = useDailyEntriesStore();
const value = ref(addDays(Date.now(), 0).valueOf());

function handleUpdateValue(
  _: number,
  { year, month, date }: { year: number; month: number; date: number }
) {
  entryStore.setSelectedDate(new Date(year, month - 1, date));
}
</script>

<style lang="sass">


.n-calendar
  --day-size: 40px
  height: auto
  .n-calendar-dates
    grid-auto-rows: var(--day-size)
    width: calc( 7 * var(--day-size))
  .n-calendar-cell
    width: var(--day-size)
    height: var(--day-size)
    padding: 0px

  .n-calendar-cell .n-calendar-date
    width: var(--day-size)
    height: var(--day-size)

  .n-calendar-cell .n-calendar-date .n-calendar-date__date
    margin-left: 0px
    width: var(--day-size)
    height: var(--day-size)

  .n-calendar-date__day
    display: none
</style>
