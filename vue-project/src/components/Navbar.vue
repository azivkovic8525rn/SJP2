<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'gallery' }">Gallery</RouterLink>
    <RouterLink :to="{ name: 'draw' }">New</RouterLink>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'register' }">Register</RouterLink>
    <RouterLink :to="{ name: 'home' }">Logout</RouterLink>
  </nav>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<style scoped>

  nav {
    background-color: white;
    padding: 1rem;
    border-bottom: solid 1px #dddddd;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: left;
  }

  a {
    color: #222222;
    text-decoration: none;
    margin-right: 1rem;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
