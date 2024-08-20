// main.js

function encriptarTexto() {
    const inputText = document.querySelector('.entrada textarea').value;
    const outputTextarea = document.querySelector('.salida textarea');
    const placeholder = document.querySelector('.salida div:first-child');
    
    if (inputText) {
        const encriptedText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        outputTextarea.value = encriptedText;
        placeholder.style.display = "none"; // Ocultar el placeholder
        outputTextarea.parentElement.style.display = "block"; // Mostrar el textarea
    } else {
        alert("Por favor, ingrese algún texto para encriptar.");
    }
}

function desencriptarTexto() {
    const inputText = document.querySelector('.entrada textarea').value;
    const outputTextarea = document.querySelector('.salida textarea');
    const placeholder = document.querySelector('.salida div:first-child');
    
    if (inputText) {
        const desencriptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputTextarea.value = desencriptedText;
        placeholder.style.display = "none"; // Ocultar el placeholder
        outputTextarea.parentElement.style.display = "block"; // Mostrar el textarea
    } else {
        alert("Por favor, ingrese algún texto para desencriptar.");
    }
}

function copiarTexto() {
    // Selecciona el textarea
    var textarea = document.getElementById("textosalida");
    
    // Selecciona el texto dentro del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el texto al portapapeles
    document.execCommand("copy");
    
    // Mensaje opcional o feedback para el usuario
    alert("Texto copiado al portapapeles");
}

