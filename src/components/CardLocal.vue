<script setup lang="ts">
const props = defineProps({
  name: String,
  type: String,
  typeId: Number,
  ratting: Number,
  imgUrl: String,
});
</script>

<template>
  <article class="local-card" :style="{ backgroundImage: `url(${imgUrl})` }">
    <div class="box-rating">
      <img src="/images/star.png" alt="Icone estrela" />
      <h2>{{ ratting }}</h2>
    </div>

    <div class="wrapper-name">
      <h2>{{ name }}</h2>
      <div class="wrapper-type">
        <h3 class="local-type">{{ type }}</h3>

        <img
          v-if="typeId === 1"
          class="type-img"
          src="/images/cup.png"
          alt="Icone xícara"
        />

        <img
          v-else-if="typeId === 2"
          class="type-img"
          src="/images/cam.png"
          alt="Icone camera"
        />

        <img
          v-else
          class="type-img"
          src="/images/calendar.png"
          alt="Icone calendário"
        />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.local-card {
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-size: contain;
  height: 19rem;
  width:15.6rem;
  position: relative;
  .box-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 2.4rem;
    top: -1.6rem;
    flex-direction: column;
    background-color: #F25D27;
    width: 3.5rem;
    height: 5.25rem;
    border-radius: 1rem;
    h2 {
      font-size: 1.2rem;
      font-family: "Barlow";
      line-height: 2;
      color: #F5F8FA;
      margin-top: 0.5rem;
    }
  }
  .wrapper-name {
    background-color: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    border: 1px solid #dce2e6;
    border-radius: 0px 0px 20px 20px;
    h2 {
      font-family: "Barlow";
      font-weight: 600;
      font-size: 1.2rem;
      color: #123952;
      padding: 1.5rem;
    }
    .wrapper-type {
      border-top: 1px solid #dce2e6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      h3 {
        font-size: 1rem;
        font-family: "Barlow";
        color: #617480;
      }
      .type-img {
        width: 1.5rem;
      }
    }
  }
}
</style>
