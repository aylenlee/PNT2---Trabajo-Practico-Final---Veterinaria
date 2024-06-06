<template>
    <div>
    <h2>Lista de Pacientes</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre del paciente</th>
          <th>Mail</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Sexo</th>
          <th>Edad</th>
          <th>Nombre del propietario</th>
          <th>Historial clínico</th>
          <th>Fecha de creación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.species }}</td>
          <td>{{ user.breed }}</td>
          <td>{{ user.sex }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.ownerName }}</td>
          <td>{{ user.historialClinico }}</td>
          <td>{{ user.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://666112b663e6a0189fe85cb5.mockapi.io/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios');
  }
};

onMounted(() => {
  fetchUsers();
});

</script>


<style scoped>

</style>