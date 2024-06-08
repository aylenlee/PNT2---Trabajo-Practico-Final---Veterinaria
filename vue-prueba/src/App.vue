<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
 <div id="app">
    <main class="flex-grow-1">
        <Navbar />
        <router-view></router-view>
    </main>
    <Footer />
 </div>
</template>

<style scoped>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
}

footer {
  background-color: #212529;
  color: #fff;
}
</style>
