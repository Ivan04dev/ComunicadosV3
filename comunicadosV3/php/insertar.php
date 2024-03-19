<?php 
    include 'conexion.php';

   if(isset($_POST['titulo']) && isset($_POST['descripcion'])  && isset($_FILES['portada']) 
        && isset($_FILES['archivo']) && isset($_POST['puesto']) && isset($_POST['marca'])) {
    
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        $portada = $_FILES['portada'];
        $archivo = $_FILES['archivo'];
        $puestosSeleccionados = $_POST['puesto'];
        $marcasSeleccionadas = $_POST['marca'];

        $nombre_portada = $portada['name'];
        $ruta_temporal = $portada['tmp_name'];
        $ruta_destino = 'C:/xampp/htdocs/uploads/' . $nombre_portada;

        $nombre_archivo = $archivo['name'];
        $ruta_temporal_a = $archivo['tmp_name'];
        $ruta_destino_a = 'C:/xampp/htdocs/uploads/' . $nombre_archivo;

        if(move_uploaded_file($ruta_temporal, $ruta_destino)){
            echo "La portada se ha subido correctamente";
        } else {
            echo "Hubo un error al subir la portada";
        }

        if(move_uploaded_file($ruta_temporal_a, $ruta_destino_a)){
            echo "El archivo se ha subido correctamente";
        } else {
            echo "Hubo un error al subir el archivo";
        }

        $puestos_str = implode(',', $puestosSeleccionados);
        $marcas_str = implode(',', $marcasSeleccionadas);
    }

    function validarDatos($titulo, $descripcion, $puestos_str, $marcas_str) {
        if($titulo == '') {
            return false;
        } elseif($descripcion == '') {
            return false;
        } elseif($puestos_str == '') {
            return false;
        } elseif($marcas_str == '') {
            return false;
        }

        return true;
    }

    if(validarDatos($titulo, $descripcion, $puestos_str, $marcas_str)) {
        $statement = $conexion->prepare("INSERT INTO comunicados_tabla(titulo, descripcion, portada, archivo, puesto, marca) VALUES(?,?,?,?,?,?)");
        $statement->bind_param("ssssss", $titulo, $descripcion, $nombre_portada, $nombre_archivo, $puestos_str, $marcas_str);
        $statement->execute();

        if($conexion->affected_rows <= 0) {
            $respuesta = ['error' => true];
        } else {
            $respuesta = ['success' => true]; // Indica el éxito de la inserción
        }
    } else {
        $respuesta = ['error' => true];
    }

    echo json_encode($respuesta);

    