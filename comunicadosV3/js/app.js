// const toggleButton = document.getElementById('toggleButton');
// const elementToToggle = document.getElementById('elementToToggle');

// toggleButton.addEventListener('click', function() {
//     // Toggle the visibility of the element
//     elementToToggle.classList.toggle('hidden');
// });

// botonArchivo.addEventListener('click', agregarArchivo);

// Funciones
/*
function agregarArchivo(){
    // Incrementar el contador
    contador++;

    // Actualizar el contenido del contador
    contadorArchivos.textContent = `Archivos: ${contador}`;

    // Agrega el input de tipo archivo 
    // <input type="file" name="archivo" id="archivo"></input>
    // const divArchivo = document.createElement('div');
    // const btnEliminar = document.createElement('a ');
    const inputArchivo = document.createElement('input');

    inputArchivo.type = 'file';
    inputArchivo.classList.add('mt-2');

    // btnEliminar.classList.add('btn', 'btn-danger');
    // btnEliminar.innerText = 'X';

    // divArchivo.appendChild(inputArchivo);
    // divArchivo.appendChild(btnEliminar);
    contenedorArchivos.appendChild(divArchivo);
    
}
*/

/*
const formulario = document.querySelector('#formulario');
const loader = document.querySelector('#loader');

let titulo;
let descripcion;
let portada;
let archivo;
let puesto;
let marca;
/*
let division;
let region;
let ciudad;


function agregarComunicado(e){
    e.preventDefault();

    let peticion = new XMLHttpRequest();
    peticion.open('POST', 'php/insertar.php');

    titulo = formulario.titulo.value.trim();
    descripcion = formulario.descripcion.value.trim();
    puesto = formulario.puesto.trim();
    marca = formulario.marca.trim();

    if(formularioValido()){
        let parametros = 'titulo=' + titulo + '&descripcion=' + descripcion + '&puesto=' + puesto + '&marca=' + marca;

        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        loader.classlist.add('active');

        peticion.onload = function() {
            formulario.titulo.value = '';
            formulario.descripcion.value = '';
            formulario.puesto.value = '';
            formulario.marca.value = '';
        }

        peticion.onreadystatechange = function(){
            if(peticion.readyState == 4 && peticion.status == 200){
                loader.classList.remove('active');
            }
        }

        peticion.send(parametros);
    }
}

function formularioValido(){
    if(titulo == ''){
        return false;
    } else if(descripcion == ''){
        return false;
    } else if (puesto == ''){
        return false;
    } else if(marca == ''){
        return false;
    }
    return true;
}
*/
const loader = document.querySelector('#loader');
const formulario = document.querySelector('#formulario');


let titulo;
let descripcion;
// let portada;
// let archivo;
let puesto;
let marca;

formulario.addEventListener('submit', function(e){
    agregarComunicado(e);
});

function agregarComunicado(e) {
    e.preventDefault();

    let peticion = new XMLHttpRequest();
    peticion.open('POST', 'php/insertar.php');

    titulo = formulario.titulo.value.trim();
    descripcion = formulario.descripcion.value.trim();
    puesto = formulario.puesto.value.trim(); // Corregido
    marca = formulario.marca.value.trim();

    if (formularioValido()) {
        let parametros = 'titulo=' + titulo + '&descripcion=' + descripcion + '&puesto=' + puesto + '&marca=' + marca; // Corregido
        // let parametros = 'titulo=' + titulo + '&descripcion=' + descripcion; // Corregido

        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        loader.classList.add('active'); // Corregido

        peticion.onload = function() {
            formulario.titulo.value = '';
            formulario.descripcion.value = '';
            formulario.puesto.value = '';
            formulario.marca.value = '';
            loader.classList.remove('active'); // Movido aquí para que se oculte el loader sin importar el resultado de la solicitud
        }

        peticion.onreadystatechange = function() {
            if (peticion.readyState == 4) {
                // Aquí puedes manejar otros estados de la solicitud, por ejemplo, si la solicitud falla
            }
        }

        peticion.send(parametros);
    }
}

function formularioValido() {
    if (titulo == '') {
        return false;
    } else if (descripcion == '') {
        return false;
    } else if (puesto == '') {
        return false;
    } else if (marca == '') {
        return false;
    }
    return true;
}

/*
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar contador de archivos
    let contador = 1;

    // Obtener referencia al contenedor de inputs
    const contenedorArchivos = document.getElementById("contenedorArchivos");
    const botonArchivo = document.getElementById("botonArchivo");
    const contadorArchivos = document.getElementById("contadorArchivos");

    // Agregar listener al botón para agregar input
    botonArchivo.addEventListener("click", function() {
        // Incrementa el contador
        contador++;
         // Imprime el valor del contador
         contadorArchivos.textContent = `Archivos: ${contador}`;

        // Crear un nuevo input de tipo file
        let nuevoInputFile = document.createElement("input");
        nuevoInputFile.type = "file";

        // Agregar clase para facilitar la selección y estilización si es necesario
        nuevoInputFile.classList.add("fileInput");

        // Agregar un botón de eliminar al lado del input
        const btnEliminarInputFile = document.createElement("button");
        btnEliminarInputFile.classList.add('btn-danger');
        btnEliminarInputFile.textContent = "X";

        btnEliminarInputFile.addEventListener("click", function() {
            // Remover el input y el botón de eliminar
            contenedorArchivos.removeChild(nuevoInputFile);
            contenedorArchivos.removeChild(btnEliminarInputFile);
            // Decrementa el contador
            contador = contador -1;
            // Imprime el valor del contador
            contadorArchivos.textContent = `Archivos: ${contador}`;
        });

        // Agregar el nuevo input y el botón de eliminar al contenedor
        contenedorArchivos.appendChild(nuevoInputFile);
        contenedorArchivos.appendChild(btnEliminarInputFile);
    });
});

// PUESTOS
let puestosSeleccionados = [];
function handleCheckboxChangePuesto(checkbox) {
    if (checkbox.checked) {
        // Si el checkbox está seleccionado, agregar su valor al arreglo
        puestosSeleccionados.push(checkbox.value);
    } else {
        // Si el checkbox está deseleccionado, remover su valor del arreglo
        const index = puestosSeleccionados.indexOf(checkbox.value);
        if (index !== -1) {
            puestosSeleccionados.splice(index, 1);
        }
    }
}

// MARCAS
let marcasSeleccionadas = [];
function handleCheckboxChangeMarca(checkbox) {
    if (checkbox.checked) {
        // Si el checkbox está seleccionado, agregar su valor al arreglo
        marcasSeleccionadas.push(checkbox.value);
    } else {
        // Si el checkbox está deseleccionado, remover su valor del arreglo
        const index = marcasSeleccionadas.indexOf(checkbox.value);
        if (index !== -1) {
            marcasSeleccionadas.splice(index, 1);
        }
    }
}

// CIUDADES
const checkVerCiudades = document.getElementById('verCiudades');
const divisiones = document.getElementById('divisiones');

checkVerCiudades.addEventListener('click', function() {
    // Muestra/oculta las divisiones (Metro - Sur - Norte)
    divisiones.classList.toggle('hidden');
});

// -----------------------------------------------------------------------

// DIVISIÓN METRO
const checkverMetro = document.getElementById('verMetro');
const divMetro = document.getElementById('divMetro');


checkverMetro.addEventListener('click', function() {
    // Muestra/oculta las regiones de Metro (Metro Norte - Metro Sur)
    divMetro.classList.toggle('hidden');
});

// METRO NORTE
const checkverMetroN = document.getElementById('verMetroN');
const divCiudadesMN = document.getElementById('divCiudadesMN');

checkverMetroN.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesMN.classList.toggle('hidden');
});

// checkbox asociados 
checkverMetroN.addEventListener('change', function() {
    var ciudadesMetroNorte = document.getElementsByClassName("ciudadesMetroNorte");
    for (var i = 0; i < ciudadesMetroNorte.length; i++) {
        ciudadesMetroNorte[i].checked = this.checked;
    }
});


// METRO SUR
const checkverMetroS = document.getElementById('verMetroS');
const divCiudadesMS = document.getElementById('divCiudadesMS');

checkverMetroS.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesMS.classList.toggle('hidden');
});

// checkbox asociados 
checkverMetroS.addEventListener('change', function() {
    var ciudadesMetroSur = document.getElementsByClassName("ciudadesMetroSur");
    for (var i = 0; i < ciudadesMetroSur.length; i++) {
        ciudadesMetroSur[i].checked = this.checked;
    }
});

// -----------------------------------------------------------------------

// DIVISIÓN SUR
const checkVerSur = document.getElementById('verSur');
const divSur = document.getElementById('divSur');

checkVerSur.addEventListener('click', function() {
    // Muestra/oculta las regiones de Metro (Metro Norte - Metro Sur)
    divSur.classList.toggle('hidden');
});

// GOLFO
const checkVerSurG = document.getElementById('verSurG');
const divCiudadesSurG = document.getElementById('divCiudadesSurG');

checkVerSurG.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesSurG.classList.toggle('hidden');
});

// checkbox asociados 
checkVerSurG.addEventListener('change', function() {
    var ciudadesSurGolfo = document.getElementsByClassName("ciudadesSurGolfo");
    for (var i = 0; i < ciudadesSurGolfo.length; i++) {
        ciudadesSurGolfo[i].checked = this.checked;
    }
});

// OCCIDENTE
const checkVerSurO = document.getElementById('verSurO');
const divCiudadesSurO = document.getElementById('divCiudadesSurO');

checkVerSurO.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesSurO.classList.toggle('hidden');
});

// checkbox asociados 
checkVerSurO.addEventListener('change', function() {
    var ciudadesSurOccidente = document.getElementsByClassName("ciudadesSurOccidente");
    for (var i = 0; i < ciudadesSurOccidente.length; i++) {
        ciudadesSurOccidente[i].checked = this.checked;
    }
});

// SURESTE
const checkVerSurS = document.getElementById('verSurS');
const divCiudadesSurS = document.getElementById('divCiudadesSurS');

checkVerSurS.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesSurS.classList.toggle('hidden');
});

// checkbox asociados 
checkVerSurS.addEventListener('change', function() {
    var ciudadesSurSureste = document.getElementsByClassName("ciudadesSurSureste");
    for (var i = 0; i < ciudadesSurSureste.length; i++) {
        ciudadesSurSureste[i].checked = this.checked;
    }
});

// -----------------------------------------------------------------------

// DIVISIÓN NORTE
const checkVerNorte = document.getElementById('verNorte');
const divNorte = document.getElementById('divNorte');

checkVerNorte.addEventListener('click', function() {
    // Muestra/oculta las regiones de Metro (Metro Norte - Metro Sur)
    divNorte.classList.toggle('hidden');
});

// CENTRO
const checkVerNorteC = document.getElementById('verNorteC');
const divCiudadesNorteC = document.getElementById('divCiudadesNorteC');

checkVerNorteC.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesNorteC.classList.toggle('hidden');
});

// checkbox asociados 
checkVerNorteC.addEventListener('change', function() {
    var ciudadesNorteCentro = document.getElementsByClassName("ciudadesNorteCentro");
    for (var i = 0; i < ciudadesNorteCentro.length; i++) {
        ciudadesNorteCentro[i].checked = this.checked;
    }
});

// NORESTE
const checkVerNorteN = document.getElementById('verNorteN');
const divCiudadesNorteN = document.getElementById('divCiudadesNorteN');

checkVerNorteN.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesNorteN.classList.toggle('hidden');
});

// checkbox asociados 
checkVerNorteC.addEventListener('change', function() {
    var ciudadesNorteNoreste = document.getElementsByClassName("ciudadesNorteNoreste");
    for (var i = 0; i < ciudadesNorteNoreste.length; i++) {
        ciudadesNorteNoreste[i].checked = this.checked;
    }
});

// PACIFICO
const checkVerNorteP = document.getElementById('verNorteP');
const divCiudadesNorteP = document.getElementById('divCiudadesNorteP');

checkVerNorteP.addEventListener('click', function() {
    // Muestra/oculta las ciudades de Metro Norte
    divCiudadesNorteP.classList.toggle('hidden');
});

// checkbox asociados 
checkVerNorteC.addEventListener('change', function() {
    var ciudadesNortePacifico = document.getElementsByClassName("ciudadesNortePacifico");
    for (var i = 0; i < ciudadesNortePacifico.length; i++) {
        ciudadesNortePacifico[i].checked = this.checked;
    }
});
*/