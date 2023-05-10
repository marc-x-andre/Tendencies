<template>
  <MainLayout>
    <div class="add-entry">
      <n-skeleton :width="300" :sharp="false" size="medium" style="margin: 20px 0 28px;" />
      <n-space vertical style="margin-bottom: 24px;">
        <n-skeleton :width="85" :sharp="false" size="tiny" />
        <n-skeleton :width="175" :sharp="false" size="medium" />
      </n-space>
      <n-space vertical style="margin-bottom: 24px;">
        <n-skeleton :width="267" :sharp="false" size="tiny" />
        <n-skeleton :sharp="false" :height="102" />
      </n-space>
      <n-space vertical style="margin-bottom: 24px;">
        <n-skeleton :width="259" :sharp="false" size="tiny" />
        <n-skeleton :sharp="false" size="medium" />
      </n-space>
      <n-space vertical style="margin-bottom: 24px;">
        <n-skeleton :width="233" :sharp="false" size="tiny" />
        <n-skeleton :sharp="false" :height="102" />
      </n-space>
      <n-space style="display: flex; justify-content: space-between;">
        <n-skeleton :width="110" :sharp="false" size="tiny" />
        <n-skeleton :width="113" :sharp="false" size="medium" round />
      </n-space>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
</script>
