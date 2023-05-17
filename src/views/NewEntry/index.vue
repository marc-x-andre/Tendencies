<template>
  <MainLayout>
    <div v-if="isPast">
      <n-h1>Ce jour est passé</n-h1>
    </div>
    <div v-else-if="selectedDate > new Date()">
      <n-h1>Ce jour est dans le future</n-h1>
    </div>
    <EntryForm v-else />
  </MainLayout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MainLayout from "@/layout/MainLayout.vue";
import { useDailyEntriesStore } from "../../stores/daily-entries";
import EntryForm from "./EntryForm.vue";
import { storeToRefs } from "pinia";
const store = useDailyEntriesStore();
const { selectedDate } = storeToRefs(store);

const isPast = computed(() => {
  const d = new Date();
  d.setDate(new Date().getDate() - 1);
  return selectedDate.value < d;
});
</script>
