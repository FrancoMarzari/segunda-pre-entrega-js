class Trabajador {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

const trabajador1 = new Trabajador("Juan", "Martinez", 20, 200000);
const trabajador2 = new Trabajador("Analia", "Ramirez", 50, 450000);
const trabajador3 = new Trabajador("Carlos", "Bustamante", 45, 155000);
const trabajador4 = new Trabajador("Sofia", "Araujo", 19, 900000);
const trabajador5 = new Trabajador("Franco", "Ruiz", 23, 1000000);

const trabajadores = [trabajador1, trabajador2, trabajador3, trabajador4, trabajador5];

trabajadores.forEach((empleado) => {
    console.log(empleado);
});

// Obtener datos del nuevo trabajador mediante prompt
const nombre = prompt("Ingrese el nombre del nuevo trabajador:");
const apellido = prompt("Ingrese el apellido del nuevo trabajador:");
const edad = parseInt(prompt("Ingrese la edad del nuevo trabajador:"));
const sueldo = parseFloat(prompt("Ingrese el sueldo del nuevo trabajador:"));

// Crear un nuevo objeto Trabajador con los datos ingresados
const nuevoTrabajador = new Trabajador(nombre, apellido, edad, sueldo);

// Agregar el nuevo trabajador a la lista
trabajadores.push(nuevoTrabajador);
alert("Nuevo trabajador:\n" + JSON.stringify(nuevoTrabajador, null, 2));


