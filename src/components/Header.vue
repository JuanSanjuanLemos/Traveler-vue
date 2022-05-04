<script setup lang="ts">
import { RouterLink } from "vue-router";
import SearchCity from "./SearchCity.vue";
const props = defineProps({
  showSearch: Boolean,
});
</script>

<template>
  <header>
    <div class="content">
      <RouterLink to="/">
        <img class="logo" src="/images/logo.png" alt="Traveler" />
      </RouterLink>
      <SearchCity v-show="showSearch" />
      <button class="access-btn">Login</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  max-width: 1440px;
  margin: auto;
  padding: 1.5rem 1rem;
  background-color: #fff;
  .logo {
    max-width: 10rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .access-btn {
      background-color: #dde9f0;
      color: #115d8c;
      padding: 0.75rem 2rem;
      font-weight: 500;
      border-radius: 0.7rem;
      border: 2px solid #c0def1;
      transition: 0.4s;

      @media (max-width: 576px) {
        display: none;
      }

      &:hover {
        color: #222;
        background-color: transparent;
      }
    }
  }
}
</style>
