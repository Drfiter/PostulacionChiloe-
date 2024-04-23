/* --- FORMULARIO SCRIPT --- */
const applicationForm = document.getElementById('application-form');
const submitBtn = document.getElementById('submitBtn');
const validationMessages = document.getElementById('validationMessages');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellidoPaterno = document.getElementById('apellido-paterno').value.trim();
    const apellidoMaterno = document.getElementById('apellido-materno').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const carta = document.getElementById('carta').value.trim();

    let isValid = true;
    validationMessages.style.display = 'none';
    validationMessages.innerHTML = '';

     // Validar RUT
     if (rut === '' || !/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]{1}$/.test(rut)) {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">El RUT ingresado no es válido. Debe tener entre 9 y 10 caracteres. (ej:20.730.492-1)</p>';
    }

    

    // Validar nombre
    if (nombre === '' || !/^[a-zA-Z\s]{3,20}$/.test(nombre)) {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">El nombre ingresado no es válido. Debe tener entre 3 y 20 caracteres.</p>';
    }

    // Validar apellido paterno
    if (apellidoPaterno === '' || !/^[a-zA-Z\s]{3,20}$/.test(apellidoPaterno)) {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">El apellido paterno ingresado no es válido. Debe tener entre 3 y 20 caracteres.</p>';
    }

    // Validar apellido materno
    if (apellidoMaterno === '' || !/^[a-zA-Z\s]{3,20}$/.test(apellidoMaterno)) {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">El apellido materno ingresado no es válido. Debe tener entre 3 y 20 caracteres.</p>';
    }

    // Validar edad
    if (edad === '' || isNaN(edad) || edad < 18 || edad > 35) {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">La edad ingresada no es válida. Debe estar entre 18 y 35 años.</p>';
    }

    // Validar género
    if (genero === '') {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">Debe seleccionar un género de la lista.</p>';
    }

    // Validar celular
    if (celular === '' || !/^\d{9,12}$/.test(celular)) {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">El número de celular ingresado no es válido. Debe tener entre 9 y 12 dígitos.</p>';
    }

    // Validar carta
    if (carta === '') {
        isValid = false;
        validationMessages.innerHTML += '<p class="error">Debe ingresar una carta de presentación e intención.</p>';
    }

    if (isValid) {
        generateCarta();
        alert('Formulario enviado correctamente');
    } else {
        validationMessages.style.display = 'block';
    }
});

function generateCarta() {
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellido-paterno").value;
    const apellidoMaterno = document.getElementById("apellido-materno").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;
    const profesion = document.getElementById("profesion").value;

    const carta = `Estimados señores:

Mi nombre es ${nombre} ${apellidoPaterno} ${apellidoMaterno}, RUT ${rut}, tengo ${edad} años de edad y mi género es ${genero}. Mi profesión es ${profesion}.

A través de esta carta, deseo presentar mi candidatura para el trabajo de apoyo ambiental en Chiloé. Me motiva mucho la oportunidad de contribuir a la conservación del medio ambiente y al desarrollo sostenible de la región.

[Aquí puedes agregar más detalles sobre tus habilidades, experiencia y motivación para el trabajo]

Espero tener la oportunidad de ser considerado para esta vacante y poder aportar mis conocimientos y esfuerzo a este importante proyecto.

Atentamente,
${nombre} ${apellidoPaterno} ${apellidoMaterno}`;

    document.getElementById("carta").value = carta;
}