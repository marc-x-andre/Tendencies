<template>
  <n-config-provider :locale="frFR" :date-locale="dateFrFR" :theme-overrides="naiveTheme">
    <router-view v-if="firebaseStateDefined" />
    <Loading v-else />
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NConfigProvider, frFR, dateFrFR } from "naive-ui";
import { useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";
import naiveTheme from "./assets/naive-theme.json";
import Loading from "./views/Loading/index.vue";

const router = useRouter();
const authStore = useAuthStore();
const firebaseStateDefined = ref(false);

authStore.auth.onAuthStateChanged((user) => {
  console.log(user);
  redirectOnLogin();
  firebaseStateDefined.value = true;
});

const redirectOnLogin = () => {
  if (authStore.auth.currentUser) {
    router.push("new");
  } else {
    router.push("/");
  }
};
</script>
