<script setup lang="ts">
import { RouterLink } from "vue-router";
import CardCity from "../components/CardCity.vue";
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import { useGetData } from "@/store/useGetData";
import { computed } from "vue";

interface City {
  id: number;
  imgUrl: string;
  name: string;
  locals: {
    total: Number;
    turism: Number;
    event: Number;
  };
}



const store = useGetData();

onMounted(() => {
  store.fetchCities();
})

const citiesFirstColumn = computed(() =>{
  return store.citiesFirstColumn
});

const citiesSecondColumn = computed(() =>{
  return store.citiesSecondColumn
});

</script>

<template>
  <Header :show-search="false" />
  <main class="main-section">
    <div class="content">
      <article class="wrapper-welcome">
        <h1>Viva uma Grande Aventura</h1>
        <p>
          Descubra locais incríveis para se visitar em cidades maravilhosas de
          Santa Catarina.
        </p>

        <RouterLink to="/search">
          <button class="button-all">Descobrir todos os lugares</button>
        </RouterLink>
      </article>
      <div class="wrapper-list">
        <div class="column">
          <CardCity
            v-for="city in citiesFirstColumn"
            :id="city.id"
            :key="city.id"
            :name="city.name"
            :totalLocals= "city.locals.total"
            :style="{ backgroundImage: `url(${city.imgUrl})` }"
          />
        </div>
        <div class="column -second">
          <CardCity
            v-for="city in citiesSecondColumn"
            :key="city.id"
            :id="city.id"
            :name="city.name"
            :totalLocals="city.locals.total"
            :style="{ backgroundImage: `url(${city.imgUrl})` }"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main-section {
  padding: 3rem 1rem;
  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .wrapper-welcome {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
      max-width: 20rem;
      h1 {
        font-size: 5rem;
        font-family: "Barlow";
        line-height: 1;
        font-weight: 600;
        color: #123952;
      }
      p {
        font-size: 1.2rem;
        color: #617480;
        line-height: 1.5;
      }
      a {
        width: 100%;
        .button-all {
          width: 100%;
          background-color: #f25d27;
          height: 4.8rem;
          border-radius: 1rem;
          font-size: 1.125rem;
          color: #fff;
          font-weight: 500;
          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }
  .wrapper-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    .column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 316px;
      &.-second {
        margin-top: 4rem;
      }
    }
  }
}
</style>
