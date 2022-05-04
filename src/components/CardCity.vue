<script setup lang="ts">
import {RouterLink} from 'vue-router';
const props = defineProps({
  name: String,
  totalLocals: Number,
  id: Number,
  imgUrl: String
});

</script>

<template>
  <article class="city-card" :style="{ backgroundImage: `url(${imgUrl})` }">
    <div class="wrapper-info">
      <RouterLink :to="{name: 'cities', params:{idCity: id}}">
        <h2>{{ name }}</h2>
      </RouterLink>
      <h3>{{ totalLocals }} locais</h3>
    </div>
  </article>
</template>

<style scoped lang="scss">
.city-card {
  width: 100%;
  padding-bottom: 96%;
  flex: 1;
  position: relative;
  border-radius: 20px;

  background-position: center top -4rem;
  background-repeat: no-repeat;
  background-size: cover;

  .wrapper-info {
    position: absolute;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    border: 1px solid #dce2e6;
    padding: 1.2rem 1.22rem;
    border-radius: 0px 0px 20px 20px;
    h2 {
      color: #123952;
      font-family: "Barlow";
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    h3 {
      color: #617480;
      font-size: 1rem;
      line-height: 2;
    }
  }
}
</style>
