<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchCity from './SearchCity.vue';
const props = defineProps({
  showSearch: Boolean
})

</script>

<template>
  <header>
    <div class="content">
      <RouterLink to="/">
        <img src="/images/logo.png" alt="Traveler">
      </RouterLink>
      <SearchCity v-show="showSearch" />
      <button class="access-btn">Login</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header{
    max-width: 1440px;
    margin: auto;
    padding: 1.5rem 1rem;
    background-color: #fff;
    .content{
      display: flex;
    justify-content: space-between;
    align-items: center;
      .access-btn{
        background-color: #DDE9F0;
        color: #115D8C;
        padding: 0.75rem 2rem;
        font-weight: 500;
        border-radius: 0.7rem;
        border: 2px solid #c0def1;
        transition: 0.4s;
  
        &:hover{
          color: #222;
          background-color: transparent;
        }
      }
    }
  }
</style>