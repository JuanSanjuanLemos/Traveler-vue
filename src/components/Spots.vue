<script setup lang="ts">
const props = defineProps({
  turism:Number,
  food:Number,
  event:Number,
})

</script>

<template>
  <ul>
    <li class="location-card">
      <img src="/images/cam.png" alt="Icone câmera" />
      <div>
        <h1>{{turism}}</h1>
        <h2>Pontos Turísticos</h2>
      </div>
    </li>
    <li class="location-card">
      <img src="/images/cup.png" alt="Icone xícara" />
      <div>
        <h1>{{food}}</h1>
        <h2>Comida e Bebida</h2>
      </div>
    </li>
    <li class="location-card">
      <img src="/images/calendar.png" alt="Icone calendario" />
      <div>
        <h1>{{event}}</h1>
        <h2>Eventos Organizados</h2>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul{
  max-width: 600px;
  display: flex;
  gap: 1rem;
  list-style: none;
  .location-card{
      height: 17.5rem;
      width: 10rem;
      background-color: #fff;
      border: 1px solid #DCE2E6;
      border-radius: 1.3rem;
      margin: auto;
      img{
          padding: 2rem;
      }
      div{
          border-top: 1px solid #DCE2E6;
          padding: 2rem;
          h1{
              font-size: 2.5rem;
              font-weight: 600;
              font-family: 'Barlow';
              color: #123952;
              margin-bottom: 1rem;
          }
          h2{
              font-size: 1rem;
              color: #617480;
          }
      }
  }
}
</style>
