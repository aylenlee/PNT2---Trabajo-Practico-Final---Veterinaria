<template>
    
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const confirmLogout = () => {
  if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
    logout();
  }
};

</script>
