<template>
  <n-layout class="main-layout">
    <n-layout-header bordered>
      <AppHeader />
    </n-layout-header>
    <n-layout has-sider>
      <n-layout>
        <div class="main-content">
          <div class="inner-content">
            <n-grid item-responsive :cols="12" style="height: calc(100vh - 120px)">
              <n-gi span="0 1200:3" style="border-right: 1px solid #efeff5">
                <n-space class="column-layout" vertical>
                  <n-h3>La roue des emotions</n-h3>
                  <n-image :src="emotionWheel" />
                  <n-text>
                    Elle vous permettra de mieux saisir vos émotions. Appuyez pour agrandir.
                  </n-text>
                </n-space>
              </n-gi>
              <n-gi span="12 1200:6">
                <n-space class="column-layout" vertical>
                  <slot />
                </n-space>
              </n-gi>
              <n-gi span="0 1200:3" style="border-left: 1px solid #efeff5">
                <n-space class="column-layout" vertical>
                  <DaySelector />
                </n-space>
              </n-gi>
            </n-grid>
          </div>
        </div>
      </n-layout>
    </n-layout>
    <n-layout-footer bordered>
      <AppFooter />
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import DaySelector from "../components/DaySelector.vue";
import emotionWheel from "../assets/emotionWheel.webp";
</script>

<style lang="sass">
.main-layout
  height: 100vh

.main-content
  width: 100%
  max-width: 1400px
  margin: 0rem auto
  .inner-content
    .column-layout
      margin: 2rem
      img
        width: 100%

.n-layout,
.n-layout-scroll-container
  display: flex
  flex-direction: column
</style>
