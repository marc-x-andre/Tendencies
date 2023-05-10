<template>
  <n-timeline>
    <n-timeline-item type="success" title="Matin" content="success content" time="2018-04-03 20:46">
      <template #icon>
        <n-icon>
          <CheckmarkDone />
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item type="warning" title="Midi" content="Midi" time="2018-04-03 20:46" />
    <n-timeline-item title="Soir" time="Reviens plus tard">
      <template #icon>
        <n-icon>
          <Hourglass />
        </n-icon>
      </template>
    </n-timeline-item>
  </n-timeline>
</template>

<script setup lang="ts">
import { CheckmarkDone, Hourglass } from "@vicons/ionicons5";
</script>

<style lang="sass">
</style>
