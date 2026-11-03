<template>

  <Navbar />

  <div class="content">
    <RouterView />
  </div>

</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Navbar from '@/components/Navbar.vue'

</script>

<style>

  body {
    margin: 0;
    background: #f5f5f5;
    color: #222222;
    font-family: Arial, Helvetica, sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    padding: 1rem;
  }

</style>
