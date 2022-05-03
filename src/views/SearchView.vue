<script setup lang="ts">
import { computed, onMounted} from "vue";
import Header from "../components/Header.vue";
import CardCity from "../components/CardCity.vue";
import {useGetData} from '../store/useGetData';

interface City {
  id: number;
  imgUrl: string;
  name: string;
  locals: number;
}

const store = useGetData();


const citiesSearch = computed(() => {
  return store.citiesSearch
})

const isCityFind = computed(() =>{
  return store.isCityFind
})

const listInScreen = computed(() => {
  return store.listInScreen
})

store.fetchCities();


</script>

<template>
  <Header :show-search="true" />
  <main>
    <div class="content" v-if="isCityFind">
      <h2 class="text-search">Selecione uma cidade:</h2>
      <div class="grid-cities">
        <CardCity
          v-for="city in listInScreen"
          :key="city.id"
          :id="city.id"
          :name="city.name"
          :totalLocals="city.locals.total"
          :img-url="city.imgUrl"
        />
      </div>
    </div>
    <div v-else class="not-found">
      <div>
        <img src="/images/emoji.svg" alt="Emoji triste">
        <p>Sem resultados. <br>
          Tente uma nova busca
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.content{
  padding: 3rem 1rem;

  .text-search{
    font-size: 2.2rem;
    color: #123952;
    font-weight: 600;
    font-family: 'Barlow';
    margin-bottom: 2rem;
  }
  .grid-cities {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat( auto-fit, (250px) );
    gap: 3.3rem;
  }
}
  .not-found{
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
      text-align: center;
      font-size: 1.5rem;
      color: #617480;
      font-weight: 500;
    }
  }
</style>
