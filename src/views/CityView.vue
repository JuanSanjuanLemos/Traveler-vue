<script setup lang="ts">
import { useGetData } from "@/store/useGetData";
import { ref, computed, watch } from "vue";
import Header from "../components/Header.vue";
import Spots from "../components/Spots.vue";
import CardLocal from "../components/CardLocal.vue";
const cityCurrent = ref<any>([]);
const currentPath = window.location.href;
const cityId = Number(currentPath.slice(currentPath.length - 1));

const isLoading = ref(true)
const store = useGetData();
store.fetchCities();

const cities = computed(() => {
  return store.cities;
});

watch(cities, () => {
  cities.value.map((city) => {
    if (city.id === cityId) {
      cityCurrent.value = city;
      isLoading.value = false;
    }
  });
});
</script>

<template>
  <Header />
  <main v-if="!isLoading">
    <div
      class="banner-city"
      :style="{ backgroundImage: `url(${cityCurrent.bannerUrl})`}"
    >
    </div>
    <div class="content">
      <section class="about-section">
        <div class="box-about">
          <h1>{{ cityCurrent.name }}</h1>
          <p class="description">{{ cityCurrent.description }}</p>
          <p class="description -short">{{ cityCurrent.shortDescription }}</p>
        </div>
        <Spots
          :event="cityCurrent.locals.event"
          :turism="cityCurrent.locals.turism"
          :food="cityCurrent.locals.food"
        />
      </section>
      <section class="locals-section">
        <h1>Conheça os locais</h1>
        <div class="grid-locals">
          <CardLocal
            v-for="local in cityCurrent.localList"
            :img-url="local.imgUrl"
            :ratting="local.ratting"
            :name="local.name"
            :typeId="local.typeId"
            :type="local.type"
          />
        </div>
      </section>
    </div>
  </main>
  <p v-else> Carregando...</p>
</template>

<style scoped lang="scss">
main {
  padding: 0;
  padding-bottom: 3rem;
  .banner-city {
    padding-top: 30%;
    background-size: cover;
    background-position: 20% center;
  }
  .about-section {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    flex-wrap: wrap;
    margin: 5rem 0;
    .box-about {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h1 {
        color: #123952;
        font-family: "Barlow";
        font-weight: 600;
        font-size: 3.375rem;
      }
      .description {
        font-size: 1.2rem;
        line-height: 1.2;
        color: #123952;
        text-align: justify;
        &.-short {
          font-size: 1rem;
          color: #617480;
        }
      }
    }
  }
  .grid-locals{
    width: 100%;
    margin: 4rem 0;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 3.3rem;
  }
}
</style>
