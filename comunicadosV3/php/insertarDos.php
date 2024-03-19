<?php
// Verificar si se recibieron los datos esperados
if(isset($_POST['titulo'], $_POST['descripcion'], $_POST['puesto'], $_POST['marca'])){
    // Recuperar los datos del formulario
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $puestosSeleccionados = $_POST['puesto'];
    $marcasSeleccionadas = $_POST['marca'];

    // Aquí puedes realizar cualquier validación adicional de los datos, si es necesario

    // Conectar a la base de datos (asumiendo que tienes un archivo de conexión)
    include 'conexion.php';

    // Insertar los datos en la base de datos
    $statement = $conexion->prepare("INSERT INTO comunicados_tabla (titulo, descripcion, puesto, marca) VALUES (?, ?, ?, ?)");
    $statement->bind_param("ssss", $titulo, $descripcion, $puestos, $marcas);

    // Iterar sobre los puestos seleccionados e insertarlos uno por uno
    foreach($puestosSeleccionados as $puesto) {
        // Ejecutar la consulta
        $puestos = $puesto;
        foreach($marcasSeleccionadas as $marca) {
            $marcas = $marca;
            $statement->execute();
        }
    }

    // Verificar si se insertaron correctamente los datos
    if($conexion->affected_rows > 0){
        $respuesta = ['status' => 'success', 'message' => '¡Datos insertados correctamente!'];
    } else {
        $respuesta = ['status' => 'error', 'message' => 'Error al insertar los datos en la base de datos.'];
    }
} else {
    $respuesta = ['status' => 'error', 'message' => 'Datos incompletos enviados desde el formulario.'];
}

// Devolver la respuesta como JSON
echo json_encode($respuesta);

