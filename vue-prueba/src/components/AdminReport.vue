<template>
    <div class="container">
    <h2>Lista de Pacientes</h2>
    <router-link to="/add-patient">Agregar Paciente</router-link>
    <br><br>
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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td>{{ patient.id }}</td>
          <td>{{ patient.name }}</td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.species }}</td>
          <td>{{ patient.breed }}</td>
          <td>{{ patient.sex }}</td>
          <td>{{ patient.age }}</td>
          <td>{{ patient.ownerName }}</td>
          <td>{{ patient.historialClinico }}</td>
          <td>{{ new Date(patient.createdAt).getDate().toLocaleString() + '/' + (new Date(patient.createdAt).getDate()+1).toLocaleString() + '/' + new Date(patient.createdAt).getFullYear().toFixed() }}</td>
          <td>
            <router-link :to="{ name: 'EditPatient', params: { id: patient.id } }">Editar</router-link>
          </td>
          <td>
            <router-link :to="{ name: 'DeletePatient', params: { id: patient.id } }">Eliminar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const patients = ref([]);

const fetchpatients = async () => {
  try {
    const response = await axios.get('https://666112b663e6a0189fe85cb5.mockapi.io/patients');
    patients.value = response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios');
  }
};

onMounted(() => {
  fetchpatients();
});

</script>


<style scoped>

</style>