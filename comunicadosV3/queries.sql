-- Obtiene todos los puestos diferentes
SELECT DISTINCT PUESTO FROM ATC_STAFF ORDER BY PUESTO ASC;
SELECT DISTINCT PUESTO FROM ATC_STAFF WHERE PUESTO NOT IN ('Administrativo', 'Ejecutivo BO Tiendas') ORDER BY PUESTO ASC;

-- Obtener nombre completo segun el puesto
SELECT NOMBRE, APPATERNO, APMATERNO, CORREO, USUARIORED FROM ATC_STAFF WHERE PUESTO = 'Ejecutivo ATC';

-----------------------------------------------------------------------------------------------

-- Obtiene las marcas
SELECT DISTINCT marca FROM atc_sucursal ORDER BY marca ASC;

-- Obtiene las divisiones por marca
SELECT DISTINCT division FROM atc_sucursal WHERE marca = 'izzi' AND division != 'Metro Sur' ORDER BY division ASC;
SELECT DISTINCT division FROM atc_sucursal WHERE marca = 'wizz' AND division != 'Metro Sur' ORDER BY division ASC;
SELECT DISTINCT division FROM atc_sucursal WHERE marca = 'wizz plus' AND division != 'Metro Sur' ORDER BY division ASC;

SELECT DISTINCT division 
FROM atc_sucursal 
WHERE marca = 'izzi' 
AND UPPER(division) NOT IN ('METRO SUR', 'METROSUR') ORDER BY division ASC;

SELECT DISTINCT division 
FROM atc_sucursal 
WHERE marca = 'wizz' 
AND UPPER(division) NOT IN ('METRO SUR', 'METROSUR')
ORDER BY division ASC;

SELECT DISTINCT division 
FROM atc_sucursal 
WHERE marca = 'wizz plus' 
AND UPPER(division) NOT IN ('METRO SUR', 'METROSUR')
ORDER BY division ASC;

-- Pruebas
SELECT DISTINCT division, region FROM atc_sucursal WHERE marca = 'izzi' ORDER BY division ASC;
SELECT DISTINCT division, region FROM atc_sucursal WHERE marca = 'wizz' ORDER BY division ASC;
SELECT DISTINCT division, region FROM atc_sucursal WHERE marca = 'wizz plus' ORDER BY division ASC;


-- Obtiene las regiones donde la marca es izzi
SELECT DISTINCT region FROM atc_sucursal WHERE marca = 'izzi' ORDER BY region ASC;
SELECT DISTINCT region FROM atc_sucursal WHERE marca = 'wizz' ORDER BY region ASC;
-- SELECT DISTINCT region FROM atc_sucursal WHERE marca = 'wizz plus' AND ciudad = 'Queretaro' ORDER BY region ASC;

-- Obtiene las ciudades donde la marca es izzi
/* 
('Acapulco', 'Aguascalientes', 'Altamira', 'Amatlan', 'Amecameca', 'Camargo', 'Campeche', 'Cancun', 
'Cd Del Carmen', 'Cd Juarez', 'Cd Mendoza', 'Cd Victoria', 'Celaya', 'Chalco', 'Chetumal', 'Chihuahua', 
'Chilpancingo', 'Chimalhuacan', 'Coacalco', 'Coatzacoalcos', 'Cordoba', 'Cuauhtemoc', 'Cuautla', 'Cuernavaca', 
'Delicias', 'Ecatepec', 'Fortin De Las Flores', 'Ixtapaluca', 'Lagos de Moreno', 'Los Reyes Acaquilpan', 
'Los Reyes Acozac', 'Matamoros', 'Melchor Ocampo', 'Meoqui', 'Nanchital', 'Nezahualcoyotl', 'Ojo De Agua', 
'Parral', 'Playa Del Carmen', 'San Buenaventura', 'Tecamac', 'Teotihuacan De Arista', 'Tepexpan', 'Texcoco', 'Yautepec')
*/
SELECT DISTINCT ciudad FROM atc_sucursal WHERE marca = 'izzi' ORDER BY ciudad ASC;

-- Obtiene las ciudades donde la marca es wizz ()
/*
('Acambaro', 'Acayucan', 'Agua Dulce', 'Alvarado', 'Amealco', 'Apan', 'Apizaco', 'Arandas', 'Atencingo', 
'Atlixco', 'Calera', 'Cardenas', 'Catemaco', 'Cd Mante', 'Cd Sahagun', 'Cd Valles', 'Cedral', 'Chapala', 
'Chietla', 'Cihuatlan', 'Ciudad Guzman', 'Comalcalco', 'Coscomatepec', 'Cunduacan', 'Gomez Farias', 
'Izucar de Matamoros', 'Jalpa', 'La Barca', 'Las Choapas', 'Lerdo de Tejada', 'Linares', 'Los Reyes Higuerita', 
'Macuspana', 'Manzanillo', 'Matamoros', 'Matehuala', 'Montemorelos', 'Periban', 'Santa Clara', 'Tepatitlan', 'Zapotiltic')
*/
SELECT DISTINCT ciudad FROM atc_sucursal WHERE marca = 'wizz' ORDER BY ciudad ASC;

-- Obtiene las ciudades donde la marca es wizz plus (Queretaro)
SELECT DISTINCT ciudad FROM atc_sucursal WHERE marca = 'wizz plus' ORDER BY ciudad ASC;