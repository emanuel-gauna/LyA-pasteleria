//funcion queryselector que se le pasa como parametro el selector #nombredeid o .nombredeclase
const qs = selector => document.querySelector(selector);
//funcion para selector por id solo se pasa el nombre como parametro sin el #
const getId = selectorId => document.getElementById(selectorId);


// Obtener referencia al formulario
const form = qs('.form-registro');

// Agregar un listener para el evento submit del formulario
form.addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    
    // Obtener referencias a los campos del formulario
    const nombre = qs('#fname').value;
    const apellido = qs('#lname').value;
    const direccion = qs('#direccion').value;
    const ciudad = qs('#ciudad').value;
    const cp = qs('#cp').value;
    const fechaNacimiento = qs('#birthdate').value;
    const email = qs('#email').value;
    const telefono = qs('#tel').value;
    const genero = qs('input[name="genero"]:checked');
    const estudios = document.querySelectorAll('input[name="estudios"]:checked');

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || apellido.trim() === '' || direccion.trim() === '' || cp.trim() === '' || fechaNacimiento.trim() === '' || email.trim() === '' || telefono.trim() === '' || !genero || estudios.length === 0) {
        alert('Por favor complete todos los campos del formulario.');
        return;
    }

    // Si todos los campos están completos, puedes enviar el formulario
    form.submit();
});
