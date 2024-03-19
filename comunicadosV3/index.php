<?php
    include 'php/conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Comunicados</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="css/styles.css">
</head>
<body>

<!-- <button class="btn btn-primary" id="toggleButton">Toggle Element</button>
<div id="elementToToggle" class="hidden">This is the element to toggle</div> -->

<div class="container">

    <form action="php/insertar.php" method="POST" id="formulario" enctype="multipart/form-data">
        <div class="row">
            <div class=" mt-4">
                <label for="titulo">Título:</label>
                <input type="text" placeholder="PRUEBA" class="form-control" name="titulo" id="titulo">
            </div>
            <div class="mt-4">
                <label for="descripcion">Descripción:</label>
                <!-- <textarea name="descripcion" id="descripcion"></textarea> -->
                <input type="text" placeholder="DESCRIPCIÓN" class="form-control" name="descripcion" id="descripcion">
            </div>
    
            <!-- BOTON ARCHIVOS -->
            <button class="mt-4 btn btn-success col-md-1" id="botonArchivo"><i class="bi bi-plus-circle"></i></button>
            
            <div class="mt-4" id="divArchivos">
                <label for="portada">Portada</label>
                <input type="file" name="portada" id="portada">
    
                <div class="mt-4" id="contenedorArchivos">
                    <label for="archivos">Archivos</label> <br><br>
                    <input type="file" name="archivo" id="archivo">
                </div>
                    
                <div id="contadorArchivos"></div>
                <div class="col-md-4 mr-4" id="cantidadArchivos"></div>
            </div>
    
            <!-- 12/02/2024 11:50 Cambio el valor de los id y los igualo al name (tenian asignado el valor de value) 
                12:26 Remuevo onclick="handleCheckboxChangePuesto(this)"
                12:28 Remuevo onclick="handleCheckboxChangeMarca(this)"
                15:08 cambio nuevamente el valor de los id de puesto
                15:13 cambio nuevamente el valor de los id de marca
            -->
            <h5 class="mt-4" for="enviarA">Enviar a:</h5>
                <div class="row mt-4 mb-4">
                    <h5 for="puesto" class="mt-4">Puesto: </h5> 
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="puesto[]" id="ejecutivoATC" value="Ejecutivo ATC">
                        <label for="ejecutivoATC">Ejecutivo ATC</label>
                    </div>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="puesto[]" id="ejecutivoSRATC" value="Ejecutivo Sr ATC">
                        <label for="ejecutivoSRATC">Ejecutivo Sr ATC</label>
                    </div>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="puesto[]" id="jefeATC" value="Jefe ATC">
                        <label for="jefeATC">Jefe ATC</label>
                    </div>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="puesto[]" id="jefeRegionalATC" value="Jefe Regional ATC">
                        <label for="jefeRegionalATC">Jefe Regional ATC</label>
                    </div>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="puesto[]" id="gerenteATC" value="Gerente ATC">
                        <label for="gerenteATC">Gerente ATC</label>
                    </div>
                </div>
    
                <hr>
                <!-- Marca -->
                <div class="row mt-4 mb-4">
                    <h4 for="puesto">Marca: </h4>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="marca[]" id="izzi" value="izzi">
                        <label for="izzi">izzi</label>
                    </div>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="marca[]" id="wizz" value="wizz">
                        <label for="wizz">wizz</label>
                    </div>
                    <div class="mt-2 col-md-4">
                        <input type="checkbox" name="marca[]" id="wizzplus" value="wizzplus">
                        <label for="wizzplus">wizz plus</label>
                    </div>
                </div>

                <hr>
                <!-- Ciudades izzi -->
                <div class="mt-4">

                </div>
                    
        </div>

        <!-- SUBMIT -->
        <input class="btn btn-primary mt-4 mb-4 col-md-2 offset-md-5" type="submit" value="Guardar">
    </form>

    <!-- LOADER -->
    <div class="loader" id="loader"></div>

    <footer class="footer">
        <p>Comunicados <span id="yearFooter"></span></p>
    </footer>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<!-- <script src="js/app.js"></script> -->
<script src="js/main.js"></script>
<script>
    var today = new Date();
    var year = today.getFullYear();
    const yearFooter = document.querySelector('#yearFooter');
    yearFooter.textContent = year;

    const puestos = document.getElementsByName('puesto[]');
    const marcas = document.getElementsByName('marca[]');

    console.log(puestos);
    console.log(marcas);

    // var puestosSeleccionados = obtenerCheckboxSeleccionados('puesto[]');
    // var marcasSeleccionadas = obtenerCheckboxSeleccionados('marca[]');



    // Función para obtener los valores de los checkboxes seleccionados
    function obtenerCheckboxSeleccionados(nombreCheckbox) {
        var checkboxes = document.querySelectorAll('input[name="' + nombreCheckbox + '"]:checked');
        var valores = [];
        checkboxes.forEach(function(checkbox) {
            valores.push(checkbox.value);
        });
        return valores;
    }

    // console.log(puestosSeleccionados);
    // console.log(marcasSeleccionadas);

</script>
</body>
</html>

