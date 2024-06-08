<template>
    <div>
        <h1 class="text-center">Editar Paciente</h1>
        <form @submit.prevent="updatePatient" class="container">
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
                    <option value="male">Macho</option>
                    <option value="female">Hembra</option>
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
                <button type="button" class="btn btn-secondary m-2" @click="cancelEdit">Cancelar</button>
                <button type="submit" class="btn btn-primary">Actualizar</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

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
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    const patientId = route.params.id;
    try {
        const response = await axios.get(`https://666112b663e6a0189fe85cb5.mockapi.io/patients/${patientId}`);
        patient.value = response.data;
    } catch (error) {
        console.error('Error al obtener el paciente');
    }
});

const updatePatient = async () => {
    try {
        await axios.put(`https://666112b663e6a0189fe85cb5.mockapi.io/patients/${patient.value.id}`, patient.value);
        router.push('/admin-report');
    } catch (error) {
        console.error('Error al actualizar el paciente');
    }
};

const cancelEdit = () => {
    router.push('/admin-report');
};
</script>

<style>

</style>