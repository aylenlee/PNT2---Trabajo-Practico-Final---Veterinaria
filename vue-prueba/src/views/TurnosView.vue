<template>

    <body class="container">
        <div class="container mt-5">
            <h1 class="display-4 text-center"><b>Turnos</b></h1>
        </div>
        <br>
        <div>
            <p>Para pedir un turno en la veterinaria, por favor sigue estos pasos:</p>
            <ol>
                <li>Contacta con la veterinaria por teléfono o visita su sitio web para obtener la información de
                    contacto.</li>
                <li>Identifica los servicios necesarios para tu mascota (consulta general, vacunación, cirugía, etc.).
                </li>
                <li>Llama a la veterinaria y proporciona la siguiente información:</li>
                <ul>
                    <li>Nombre y tipo de mascota.</li>
                    <li>Servicio requerido.</li>
                    <li>Disponibilidad de horarios que te convengan.</li>
                </ul>
                <li>Confirma tu cita una vez que hayas acordado un horario conveniente.</li>
                <li>Prepara a tu mascota según las indicaciones que te hayan dado (por ejemplo, ayuno previo para
                    procedimientos quirúrgicos).</li>
                <li>Llega a tiempo el día de la cita y asegúrate de llevar todos los documentos necesarios.</li>
            </ol>

            <p>Con estos pasos simples, podrás organizar fácilmente un turno en la veterinaria para cuidar de la salud
                de tu mascota.</p>
        </div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-6">
                    <h2>Contactanos</h2>
                    <form>
                        <div class="form-group mt-3">
                            <label for="nombre">Nombre</label>
                            <input type="text" placeholder="Nombre" class="form-control" id="nombre">
                        </div>
                        <div class="form-group mt-3">
                            <label for="apellido">Apellido</label>
                            <input type="text" placeholder="Apellido" class="form-control" id="apellido">
                        </div>

                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                        </div>

                        <div class="form-group mt-3">
                            <label for="mensaje">Mensaje</label>
                            <textarea placeholder="Dejanos tu mensaje" class="form-control" rows="5"
                                id="mensaje"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3">Enviar</button>
                    </form>
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6566.208619123475!2d-58.4749299287796!3d-34.62680422590091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9898429432b%3A0x5b49bc5d45cb6c5!2sCl%C3%ADnica%20Veterinaria%20Dr.%20Luis%20Gioria!5e0!3m2!1ses!2sar!4v1718746343647!5m2!1ses!2sar"
                        width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

    </body>

</template>

<script setup>
// import axios from 'axios'
</script>

<style scoped></style>