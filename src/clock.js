const video = document.getElementById('video-background');
video.playbackRate = 0.6; // El video se reproducirá hacia adelante

function setClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    // new Date() es una forma de crear un objeto de tipo Date en JavaScript
    // new Date(), obtienes un objeto Date que representa la fecha y hora actuales.
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;


    /**
    
    const year = date.getFullYear(); // Obtiene el año actual
    const month = date.getMonth(); // Obtiene el mes actual (0-11)
    const day = date.getDate(); // Obtiene el día del mes actual (1-31)
    const hour = date.getHours(); // Obtiene la hora actual (0-23)
    const minute = date.getMinutes(); // Obtiene el minuto actual (0-59)
    const second = date.getSeconds(); // Obtiene el segundo actual (0-59) 
    
    */

    // Aqui llamamos al documento HTML y a la constante creada mas arriba
    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
}

function setRotation(element, rotationRatio) {
    /**
     - element, es el elemento HTML al que queremos aplicar la rotación.
     - rotationRatio, es la fracción del círculo que queremos rotar el elemento.
     
     */
    element.style.setProperty('--rotation', rotationRatio * 360 + 'deg');
    //element.style , es una propiedad que permite acceder y modificar estilos CSS de un elemento HTML directamente desde JavaScript 
    //setProperty , te permite establecer cualquier propiedad CSS, incluso aquellas que no son accesibles directamente a través de JavaScript.
}

setInterval(setClock, 1000);


// setInterval es una función en JavaScript que se utiliza para ejecutar una función específica cada cierto intervalo de tiempo especificado.



