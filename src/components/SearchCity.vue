<script setup lang="ts">
import { useGetData } from '@/store/useGetData';
import { ref } from 'vue';

const valueSearch = ref("");

const store = useGetData();

function searchCities(){
  store.filterCities(valueSearch.value)
}

</script>

<template>
  <div class="box-search">
    <span @click="searchCities">
      <i class="fa-solid fa-magnifying-glass" />
    </span>

    <input
      type="text"
      class="input-search"
      placeholder="Qual cidade você procura?"
      v-model="valueSearch"
      @change="searchCities"
    />
  </div>
</template>

<style scoped lang="scss">
.box-search {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 2rem;

  max-width: 24rem;
  background-color: #eef0f1;

  border: 1px solid #dce2e6;
  padding: 1rem 0.7rem;
  border-radius: 0.7rem;

    color: #a0acb2;
  
  input {
    border: none;
    width: 100%;
    background-color: #eef0f1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    &::placeholder {
      color: #a0acb3;
      font-size: 1rem;
    }
  }
  span {
    cursor: pointer;
    font-size: 1.2rem;
  }
}
</style>
