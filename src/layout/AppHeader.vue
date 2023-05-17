<template>
  <n-page-header>
    <template #default>
      <n-space justify="space-between" style="width: 80%; margin: 0.5rem auto; align-items: center;">
        <n-avatar src="/favicon.webp" referrerpolicy="no-referrer" style="background-color: white" />
        <!-- <n-space>
          <template v-if="api.loading">
            <n-skeleton v-for="i in 3" :key="i" :width="isMobile ? '42px' : '78px'" :size="isMobile ? 'tiny' : 'medium'"
              :sharp="false" />
          </template>
          <template v-else>
            <router-link to="/">
              <n-button :size="isMobile ? 'tiny' : 'medium'">Landing</n-button>
            </router-link>
            <router-link to="/new">
              <n-button :size="isMobile ? 'tiny' : 'medium'">New</n-button>
            </router-link>
          </template>
        </n-space> -->
        <AppHeaderUser />
      </n-space>
    </template>
  </n-page-header>
</template>

<script setup>
import { useApiStore } from "@/stores/api";
import AppHeaderUser from "./AppHeaderUser.vue";
const api = useApiStore();
</script>

<style lang="sass">
@import vars
.n-layout-header
  z-index: 100
  a
    text-decoration: none
</style>
