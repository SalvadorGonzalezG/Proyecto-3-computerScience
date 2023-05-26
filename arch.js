
class Alumno{
    constructor(nombre, apellidos, edad, tipo){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.tipo = tipo;
        
        /*this.sumaCalif = function sumaCalif(){
        return `la suma de las calificaciones de ${this.nombre} son:`*/
                                             }
                                                                           }
            
    class Regular extends Alumno{
        constructor(nombre, apellidos, edad, tipo){
            super(nombre, apellidos, edad, tipo)
        }
    } 
    class Irregular extends Alumno{
        constructor(nombre, apellidos, edad, tipo){
            super(nombre, apellidos, edad, tipo)
        }
    }

 /*const Raul = new Alumno("Guill","Chavez Hernandez", "16 años", "1", "8, 6, 10")   console.log(Raul.nombre);
    console.log(Raul.apellidos); console.log(Raul.edad) console.log(Raul.materiasInscritas) console.log(Raul.calificaciones) console.log(Raul.sumaCalif())
*/
    var alumno; //JSON.parse(localStorage.getItem('alumno')) || [];

    function crearAlumno() {
        var nombre = document.querySelector("#nombre").value
        var apellidos = document.querySelector("#apellidos").value
        var edad = document.querySelector("#edad").value
        var tipo = document.querySelector("#tipo").value

        if(tipo == "Regular"){
            alumno = new Regular(nombre, apellidos, edad, tipo);
            
        }
        if(tipo == "Irregular"){
            alumno = new Irregular(nombre, apellidos, edad, tipo)
        }

        dibujar(alumno)
        return alumno;
    }

    function dibujar(alumno){
        let nodoalumno = document.querySelector("#fist")
        nodoalumno.innerHTML = 
       //document.querySelector("#fist").innerHTML +=
    `
    <div>
            <h1> CONFIRMACION DE TUS DATOS: </h1>
            <p > Tu nombre es: ${alumno.nombre}.</p>
            <p class=""> Tus apellidos son: ${alumno.apellidos}</p>
            <p class=""> Tu edad es: ${alumno.edad} años</p>
            <h5>NOTA: Da click en confirmar si son correctos tus datos para poder dar de alta las materias que deseas cursar, ¡bienvenido ${alumno.nombre}! ${alumno.tipo}. </h5>
            <button id="buton" class="" type="button" onclick ="confirmar()" > Confirmar.</button>
            <button id= "" class="" type="" onclick = "crearAlumno()">Regresar.</button>
    </div>`;
    }
    
    document.querySelector("#button").addEventListener("click", crearAlumno)
    
    function confirmar(){
        let nodoconfirmar = document.querySelector("#fist")
        nodoconfirmar.innerHTML =
    ` Gracias por confirmar tus datos ${alumno.nombre} ${alumno.apellidos}, selecciona las MATERIAS que deseas inscribir y los profesores con quienes deseas cursar.
        <button id ="" onclick="continu()"> CONTINUAR.</button>
    `
    }
    
    function continu(){
        let nodocontinue = document.querySelector("#fist")
        nodocontinue.innerHTML = `
        ALTA DE MATERIAS <br>
        <label class="label" for="tipo"> Materias a inscribir. </label>
        <div >
            <select id="tipo1">
                <option>Arte.</option>
                <option>Matematicas.</option>
                <option>Español</option>
                <option>Literatura</option>
            </select>
            <br>
        <label> Profesores disponibles:</label>
            <br>
            <select>
            <option> Dr.Antonio Romero Sanchez.</option>
            <option> Dr.Angel David Pineda.</option>
            <option> Dra. Maria Salazar L.</option>                    
            </select> 
            <button id="buton" class="" type="button" onclick ="inscribir()" > Inscribir.</button>  
        </div>
        `
    }
    function inscribir(){
        let nodoInscribir = document.querySelector("#fist")
        nodoInscribir.innerHTML = `Muchas gracias ${alumno.nombre} ${alumno.apellidos} eres unalumno ${alumno.tipo} 
        se ha dado de alta tu materia con el profesor seleccionado ¡MUCHAS GRACIAS!`
    }