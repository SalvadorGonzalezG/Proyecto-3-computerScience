
class Alumno{
    constructor(nombre, apellidos, edad, materiasInscritas, calificaciones){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materiasInscritas = materiasInscritas;
        this.calificaciones = calificaciones;

        this.sumaCalif = function sumaCalif(){
        return `la suma de las calificaciones de ${this.nombre} son:`
                                             }
                                                                           }
            }

 const Raul = new Alumno("Guill","Chavez Hernandez", "16 años", "1", "8, 6, 10")
    console.log(Raul.nombre);
    console.log(Raul.apellidos);
    console.log(Raul.edad)
    console.log(Raul.materiasInscritas)
    console.log(Raul.calificaciones)
    console.log(Raul.sumaCalif())

    var alumno = JSON.parse(localStorage.getItem('alumno')) || [];

    function crearAlumno () {
        var nombre = document.querySelector("#nombre").value
        var apellidos = document.querySelector("#apellidos").value
        var edad = document.querySelector("#edad").value

        if(edad > 0){
            alumno = new Alumno(nombre, apellidos, edad)
        }

        dibujar(alumno)
        return alumno;
    }
    function dibujar(alumno){
        document.querySelector("#alumno").innerHTML +=
    `
    <div class = "card">

            <p > ${alumno.nombre}</p>
            <p class="title is-4">${alumno.apellidos}</p>
            <p class="subtitle is-6"> Tipo de animal: ${alumno.edad}</p>
            
           
    </div>`;
    console.log(alumno.edad)
    
    }
    function clickear(alumno){
        let clickeando = document.querySelector("#containerSonido")
        clickeando.innerHTML = `esto es`
    }
    document.querySelector("#button").addEventListener("click", crearAlumno)
