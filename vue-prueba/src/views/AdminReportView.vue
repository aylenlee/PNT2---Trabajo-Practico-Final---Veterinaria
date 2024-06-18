<template>

    <body>
        <div class="container mt-5">
            <h1 class="display-4 text-center"><b>Informe para administradores</b></h1>
            <p class="lead text-center">Visible solo para administradores</p>
        </div>
        <AdminReport />
    </body>

</template>

<script setup>
import AdminReport from '../components/AdminReport.vue';
</script>

<style scoped></style>