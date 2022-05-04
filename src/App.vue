<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body, input, textarea, button{
        font: 400 1rem "Heebo", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }
  body{
    background-color: #dfdfdf;
  }
  main{
    background-color: #F5F8FA;
  }
    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
  a{
    text-decoration: none;
    color: inherit;
  }
  main{
    max-width: 1440px;
    margin: auto;
    padding: 0 1rem;
  }
  //Content-box style
  .content{
    max-width: 1160px;
    margin: auto;
  }
</style>