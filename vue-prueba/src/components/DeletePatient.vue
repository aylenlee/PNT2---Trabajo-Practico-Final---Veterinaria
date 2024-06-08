<template>
    <div class="text-center">
        <h3>¿Está seguro que quiere eliminar este paciente {{ patient.name }}?</h3>
        <button @click="cancelDelete">Cancelar</button>
        <button @click="deletePatient" class="btn btn-danger">Eliminar Paciente</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const patient = ref({});
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

const deletePatient = async () => {
    try {
        await axios.delete(`https://666112b663e6a0189fe85cb5.mockapi.io/patients/${patient.value.id}`);
        console.log('Paciente eliminado con éxito');
        router.push('/admin-report');
    } catch (error) {
        console.error('Error al eliminar el paciente');
    }
};

const cancelDelete = () => {
    router.push('/admin-report');
};
</script>

