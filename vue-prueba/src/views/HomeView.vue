<template>

    <body>
        <div class="container mt-5">
            <h1 class="display-4 text-center"><b>Veterinaria Animal Center</b></h1>
            <p class="lead text-center">Welcome to the home page!!</p>
        </div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade container-fluid p-0" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/imagenes/perritos.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imagenes/pez.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imagenes/gatitos.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <br>
        <div class="container mt-5">
            <div>
                <div class="text-justify">
                    <h2>Acerca de nosotros</h2>
                    <p>
                        ¡Bienvenidos a Veterinaria Animal Center, donde el cuidado y bienestar de tus mascotas es
                        nuestra prioridad! Con años de experiencia y un equipo de profesionales dedicados, nos
                        comprometemos a proporcionar el mejor cuidado médico y servicios de calidad para tus
                        compañeros de cuatro patas.
                        <br>
                        En Veterinaria Animal Center, entendemos que tus mascotas son parte de tu familia. Ofrecemos
                        una amplia gama de servicios veterinarios que incluyen consultas generales, vacunaciones,
                        cirugía, odontología, nutrición y emergencias. Nuestro equipo está compuesto por
                        veterinarios altamente capacitados y personal amable que se preocupa profundamente por la
                        salud y felicidad de tus mascotas.
                    </p>
                </div>
            </div>
            <br>
            <div>
                <h2>Servicios</h2>
                <div class="row mt-2">
                    <div class="col-md-4">
                        <div class="card">
                            <img src="../assets/imagenes/consulta.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Consultas Generales</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src="../assets/imagenes/vacuna.jpg" class="" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Vacunaciones</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src="../assets/imagenes/cirugia.jpg" class="" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Cirugía</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br>
            <div class="row mt-2">
                <div class="col-md-4">
                    <div class="card">
                        <img src="../assets/imagenes/odonto.jpg" class="" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Odontología</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="../assets/imagenes/nutricion.jpg" class="" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Nutrición</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="../assets/imagenes/emergencias.jpg" class="" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Emergencias</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </body>


</template>

<script setup>

</script>

<style scoped>
.text-justify {
    text-align: justify;
}

.d-block {
    max-height: 700px;
    height: auto;
    object-fit: cover;
}
</style>