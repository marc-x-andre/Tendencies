<template>
  <n-space class="emotion-wheel" vertical>
    <n-calendar v-model:value="value" :is-date-disabled="isDateDisabled" @update:value="handleUpdateValue" />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { isYesterday, addDays } from 'date-fns/esm'

export default defineComponent({
  setup() {
    return {
      value: ref(addDays(Date.now(), 0).valueOf()),
      handleUpdateValue(
        _: number,
        { year, month, date }: { year: number; month: number; date: number }
      ) {
        console.log(`${year}-${month}-${date}`);
      },
      isDateDisabled(timestamp: number) {
        if (isYesterday(timestamp)) {
          return true
        }
        return false
      }
    }
  }
})
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