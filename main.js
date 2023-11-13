class trabajador{
    constructor(nombre,apellido,edad,sueldo){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.sueldo=sueldo
    }
    
}
const trabajador1= new trabajador("juan","martinez",20,200000)
const trabajador2= new trabajador("analia","ramirez",50,450000)
const trabajador3= new trabajador("carlos","bustamante",45,155000)
const trabajador4= new trabajador("sofia","araujo",19,900000)
const trabajador5= new trabajador("franco","ruiz",23,1000000)

const trabajadores=[trabajador1,trabajador2,trabajador3,trabajador4,trabajador5]
trabajadores.forEach((empleados) => {
    console.log(empleados)
});