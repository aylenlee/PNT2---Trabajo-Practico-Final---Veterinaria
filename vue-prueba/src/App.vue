<script setup>
import Home from './Home.vue';
import Turnos from './Turnos.vue';
import Adopcion from './Adopcion.vue';

</script>

<template>
 <div>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/turnos">Turnos</router-link>
    <router-link to="/adopcion">Adopcion</router-link>
  </nav>
  <router-view></router-view>
 </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
