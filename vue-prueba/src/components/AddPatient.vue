<template>
    <div>
        <h1 class="text-center">Agregar nuevo paciente</h1>
        <form @submit.prevent="savePatient" class="container">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre del Paciente</label>
                <input type="text" class="form-control" id="name" placeholder="Nombre del Paciente" v-model="patient.name" required>
            </div>
            <div class="mb-3">
                <label for="mail" class="form-label">Mail</label>
                <input type="email" class="form-control" id="mail" placeholder="Mail" v-model="patient.email" required>
            </div>
            <div class="mb-3">
                <label for="species" class="form-label">Especie</label>
                <input type="text" class="form-control" id="species" placeholder="Especie" v-model="patient.species" required>
            </div>
            <div class="mb-3">
                <label for="breed" class="form-label">Raza</label>
                <input type="text" class="form-control" id="breed" placeholder="Raza" v-model="patient.breed" required>
            </div>
            <div class="mb-3">
                <label for="sex" class="form-label">Sexo</label>
                <select class="form-control" id="sex" v-model="patient.sex" required>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Edad</label>
                <input type="number" class="form-control" id="age" placeholder="Edad" v-model="patient.age" required>
            </div>
            <div class="mb-3">
                <label for="ownerName" class="form-label">Nombre del Propietario</label>
                <input type="text" class="form-control" id="ownerName" placeholder="Nombre del Propietario" v-model="patient.ownerName" required>
            </div>
            <div class="mb-3">
                <label for="historialClinico" class="form-label">Historial Clínico</label>
                <textarea class="form-control" id="historialClinico" placeholder="Historial Clínico" v-model="patient.historialClinico" required></textarea>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-primary" @click="cancelAdd">Cancelar</button>
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const patient = ref({
    name: '',
    email: '',
    species: '',
    breed: '',
    sex: '',
    age: '',
    ownerName: '',
    historialClinico: '',
});

const savePatient = async () => {
  try {
    await axios.post('https://666112b663e6a0189fe85cb5.mockapi.io/patients', patient.value);
    router.push('/admin-report');
  } catch (error) {
    console.error('Error al guardar el paciente');
  }
};

const cancelAdd = () => {
  router.push('/admin-report');
};

</script>

<style>

</style>