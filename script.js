
var fechaFinalizacion = new Date("2024-01-03T00:00:00").getTime();


var intervalo = setInterval(function() {
  
    var fechaActual = new Date().getTime();


    var diferencia = fechaFinalizacion - fechaActual;

  
    var segundos = Math.floor((diferencia / 1000) % 60);
    var minutos = Math.floor((diferencia / 1000 / 60) % 60);
    var horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));


    var mensaje = "Mira lo poco que falta para el veraneio brasilero: ";
    mensaje += dias + " días, ";
    mensaje += horas + " horas, ";
    mensaje += minutos + " minutos, ";
    mensaje += segundos + " segundos";

   
    document.getElementById("cuentaRegresiva").innerHTML = mensaje;

  
    if (diferencia < 0) {
        clearInterval(intervalo); 
        document.getElementById("cuentaRegresiva").innerHTML = "¡Tiempo expirado!";
    }
}, 1000); 


var nombreUsuario = prompt("Ingresa tu nombre!:");


var elementoSaludo = document.getElementById("saludo");
elementoSaludo.textContent = "¡Bem-vida/o, " + nombreUsuario + "! ";



const apiKey = '51d26106465f0412dbcabf1c';
const url = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const cotizacionARS = data.rates.ARS;
        document.getElementById('cotizacion').innerText = `1 Dólar = ${cotizacionARS} Pesos Argentinos`;
    })
    .catch(error => {
        console.error('Error al obtener la cotización:', error);
        document.getElementById('cotizacion').innerText = 'Error al obtener la cotización.';
    });