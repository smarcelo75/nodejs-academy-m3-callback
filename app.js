let ciudades = [];

const mostrarCiudades = () => {
    console.log('Listado de ciudades \n');
    ciudades.forEach(ciudad => console.log(ciudad));
    console.log('\n');
}

const agregarCiudad = (ciudad, callback) => {
    ciudades.push(ciudad);
    callback();
}

agregarCiudad('Londres', mostrarCiudades);
agregarCiudad('Paris', mostrarCiudades);
agregarCiudad('New York', mostrarCiudades);
agregarCiudad('Tokyo', mostrarCiudades);
agregarCiudad('Cordoba', mostrarCiudades);