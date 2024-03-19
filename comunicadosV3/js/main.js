// Función para obtener los valores de los checkboxes seleccionados
function obtenerCheckboxSeleccionados(nombreCheckbox) {
    var checkboxes = document.querySelectorAll('input[name="' + nombreCheckbox + '"]:checked');
    var valores = [];
    checkboxes.forEach(function(checkbox) {
        valores.push(checkbox.value);
    });
    return valores;
}

// Función para enviar los datos por AJAX
function enviarDatos() {
    var titulo = document.getElementById('titulo').value;
    var descripcion = document.getElementById('descripcion').value;
    // Portada
    var portadaInput = document.querySelector('#portada');
    var portada = portadaInput.files[0]; // Se obtiene el archivo del input

    // Archivo
    var archivoInput = document.querySelector('#archivo');
    var archivo = archivoInput.files[0];

    var puestosSeleccionados = obtenerCheckboxSeleccionados('puesto[]');
    var marcasSeleccionadas = obtenerCheckboxSeleccionados('marca[]');

    var formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('portada', portada);
    formData.append('archivo', archivo);

    // 
    puestosSeleccionados.forEach(function(valor) {
        formData.append('puesto[]', valor);
    });
    marcasSeleccionadas.forEach(function(valor) {
        formData.append('marca[]', valor);
    });

    fetch('php/insertar.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Ocurrió un error al enviar los datos.');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        // Manejar la respuesta del servidor aquí
    })
    .catch(function(error) {
        console.error('Error al enviar datos:', error);
    });
}

// Evento para enviar los datos cuando se envíe el formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera convencional
    enviarDatos(); // Llamar a la función para enviar los datos por AJAX
});


/*
// V2
// Función para enviar los datos por AJAX
function enviarDatos() {
    console.log('Iniciando envío de datos...');
    var titulo = document.getElementById('titulo').value;
    var descripcion = document.getElementById('descripcion').value;
    var puestosSeleccionados = obtenerCheckboxSeleccionados('puesto[]');
    var marcasSeleccionadas = obtenerCheckboxSeleccionados('marca[]');

    var formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    puestosSeleccionados.forEach(function(valor) {
        formData.append('puesto[]', valor);
    });
    marcasSeleccionadas.forEach(function(valor) {
        formData.append('marca[]', valor);
    });

    fetch('php/insertarDos.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Respuesta del servidor:', data);
        if (data.status === 'success') {
            console.log('Datos agregados correctamente.');

            // Limpiar los campos del formulario
            document.getElementById('titulo').value = '';
            document.getElementById('descripcion').value = '';
            document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
                checkbox.checked = false;
            });

            // Mostrar alerta de éxito
            alert('¡Los datos se han agregado correctamente!');
        } else {
            console.log('Error al agregar los datos:', data.message);
            alert('Ha ocurrido un error al agregar los datos.');
        }
    })
    .catch(function(error) {
        console.error('Error al enviar datos:', error);
        alert('Ha ocurrido un error al enviar los datos.');
    });
}
*/