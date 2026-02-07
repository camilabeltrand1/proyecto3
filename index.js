const select = document.getElementById("opciones");

// funcion reutilizable para revisar valores ingresados
function pedirDatos() {
    let datos = [];
    while (true) {
        let entrada = prompt("Ingresar dato (presiona 'Cancelar' para terminar):");
        if (entrada === null || entrada === "") {
            break;
        }
        entrada = entrada.replace(",", "."); //se aceptan decimales con punto o coma.
        let numero = parseFloat(entrada);
        if (!isNaN(numero)) {
            datos.push(numero);
        } 
        else {
            alert("Por favor ingresa un número válido");
        }
        
    }
    return datos;
}

function sumarDatos() {
    const datos = pedirDatos();
    if (datos.length === 0) {
        alert("No se ingresaron datos");
    }

    let resultado=0;

    datos.forEach(n =>  resultado += n);
    console.log("Datos ingresados: ", datos)
    console.log("Suma: ",resultado);

}


function restarDatos() {
    const datos = pedirDatos();
    
    if (datos.length === 0) {
        alert("No se ingresaron datos");
    }
    
    let resultado=datos[0];

    for (let i=1; i<datos.length; i++){
        resultado -=datos[i];
    }
    console.log("Datos ingresados: ", datos)
    console.log("Resultado de la Resta: ",resultado);
}

function multiplicarDatos() {
    const datos = pedirDatos();
    
    if (datos.length === 0) {
        alert("No se ingresaron datos");
    }
    let resultado=1;
   
    datos.forEach(n =>  resultado *= n);
    console.log("Datos ingresados: ", datos)
    console.log("Resultado de la Multiplicación: ",resultado);
}

function dividirDatos() {
    const datos = pedirDatos();
    
    if (datos.length === 0) {
        alert("No se ingresaron datos");
    }

    let resultado = datos[0];
    for (let i=1; i <datos.length; i++){
        if (datos[i]===0){
            alert("No se puede dividir por cero");
            return
        }
        resultado /= datos[i];
    }
    console.log("Datos ingresados: ", datos)
    console.log("Resultado de la División: ",resultado.toFixed(2));
}

function promedioDatos() {
    const datos = pedirDatos();
    
    if (datos.length === 0) {
        alert("No se ingresaron datos");
    }
    let resultado=1;
    if (datos.length === 0) {
        alert("No se ingresaron datos");
        return;
    }
    let suma=0;

    datos.forEach(n => suma += n);

    const promedio = suma / datos.length;
    console.log("Datos ingresados:", datos);
    console.log("Promedio:", promedio.toFixed(2));
}

// funciones para hacer conversiones de longitud y tiempo

function convertirLongitud() {
    const opcion = prompt("Elige la conversión:\n (1) Km a m \n (2) m a Km")
     if (opcion !== "1" && opcion !== "2") {
        alert("Opción no válida");
        return;
    }
    let entrada = prompt("Ingresa el valor a convertir:");
    if (entrada === null || entrada === "") return;
    
    entrada = entrada.replace(",", "."); //aceptar decimales con punto y con coma
    const valor = parseFloat(entrada);
    
    if (isNaN(valor)) {
        alert("Debes ingresar un número válido");
        return;
    }

    if (opcion === "1") {
        resultado = valor * 1000;
        console.log(`${valor} km = ${resultado} m`);
    } else {
        resultado = valor / 1000;
        console.log(`${valor} m = ${resultado} km`);
    }
}

function convertirTiempo() {
    const opcion = prompt("Elige la cionversión: \n (1) minutos a horas \n (2) horas a minutos")
    if (opcion !== "1" && opcion !== "2") {
        alert("Opción no válida");
        return;
    }
    if (opcion === "1"){
        const entrada = prompt("Ingresa la cantidad de minutos:");
    if (entrada === null || entrada === "") return;

    const minutosTotales = parseInt(entrada);
    if (isNaN(minutosTotales) || minutosTotales < 0) {
        alert("Ingresa un número válido de minutos");
        return;
    }
    const horas = Math.floor(minutosTotales / 60);
    const minutos = minutosTotales % 60;
    console.log(`${minutosTotales} minutos equivalen a ${horas} horas y ${minutos} minutos`
    );
    }
    else {
      let entrada = prompt("Ingresa la cantidad de horas (puede tener decimales):");  
      if (entrada === null || entrada === "") return;
      entrada = entrada.replace(",", "."); //aceptar decimales con punto y con coma
      const horas = parseFloat(entrada);
      if (isNaN(horas) || horas < 0) {
        alert("Ingresa un número válido de horas");
        return;
        }
        const minutos = horas * 60;

    console.log(`${horas} horas equivalen a ${minutos} minutos`);


    }
    
}

function finalizar() {
  contenedor.textContent = "Aplicación finalizada. ¡Gracias!";
}



function manejarOpcion() {
  const opcion = select.value;

  switch (opcion) {
    case "sumar":
      sumarDatos();
      break;
    case "restar":
        restarDatos();
        break;
    case "multiplicar":
        multiplicarDatos();
        break;
    case "dividir":
        dividirDatos();
        break;
    case "promedio":
        promedioDatos();
        break;

    case "finalizar":
      finalizar();
      break;
  }
}


// Evento principal para manejar el menu
select.addEventListener("change", manejarOpcion);


const botones = document.querySelectorAll(".menu-bar button");


botones.forEach(btn => {
  // imprimir cada botón en consola
  //console.log("VALOR DE btn: ", btn);

  // asignar evento click a cada botón del menu
  btn.addEventListener("click", () => {
    const opcion = btn.dataset.option;

    if (opcion=== "longitud"){
        convertirLongitud();
    }
    if (opcion === "tiempo") {
      convertirTiempo();
    }
  });
});


/* console.log("El archivo de JavaScript está conectado correctamente!");

let parrafo = document.getElementById("mensaje");

parrafo.textContent = "Este texto fue agregado con JavaScript";

try {
    let resultado=dividir(10,0);
}
catch (error) {
    console.log("Ocurrió un error:" + error.message);
}
 */
/* let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    console.log("El número es par");
}
else {
    console.log("El número es impar")
} */

/* let nombre = "Camila";
let edad = 35;

console.log(`Tu nombre es ${nombre} y tienes ${edad} años de edad`);
 */
//Ejercicio2
/* let a=5;
let b="5";

let c=a+b;
console.log("resultado de a+b=",c) */

//ejerccio 3
/*
let puedeVotar = true;
let edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad) || edad <=0) {
    console.warn("Entrada no válida. Ingrese una edad mayor a 0");
}
else if (edad >= 18 && puedeVotar) {
    console.log("Puede votar");
}

else {
    console.warn("No puede votar");
} */

// Ejercicio 4
/* 
let frase1 = "Hola, estoy de vacaciones.";
let frase2 = "¿vamos a la playa?";
let invitacion = `${frase1} ${frase2}`;
console.log(invitacion.toUpperCase());
 */


