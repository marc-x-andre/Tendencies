<template>
  <n-config-provider :locale="frFR" :date-locale="dateFrFR" :theme-overrides="naiveTheme">
    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";
import naiveTheme from "./assets/naive-theme.json";
import { frFR, dateFrFR } from "naive-ui";

const router = useRouter();
const authStore = useAuthStore();

authStore.auth.onAuthStateChanged(() => {
  redirectOnLogin();
});

const redirectOnLogin = () => {
  if (authStore.auth.currentUser) {
    router.push("new");
  } else {
    router.push("/");
  }
};

redirectOnLogin();
</script>
