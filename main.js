
function encriptar() {
    // Obtener el texto del input
    let texto = document.getElementById('texto').value;
    // Verificar si el texto está vacío
    if (texto.trim() === '') {
    
        mostrarImagen();
        return;
    }

    // Verificar si el texto contiene mayúsculas o caracteres especiales
    let contieneCaracteresNoPermitidos = /[A-Z!@#$%^&*()_+={}[\]\\|:;"'<,>.?/~]/.test(texto);
    if (contieneCaracteresNoPermitidos) {
        // Mostrar un mensaje de error si el texto contiene caracteres no permitidos
        mostrarError('El texto no puede contener mayúsculas ni caracteres especiales.');
        return;
    } 

    let resultado = '';

    // Reemplazar las letras según la encriptación del desafio
    resultado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado
    mostrarTextoEncriptado(resultado);
}

// Función para desencriptar el texto ingresado por el usuario
function desencriptar() {

    let texto = document.getElementById('texto').value;

    if (texto.trim() === '') {
        // Mostrar la imagen en lugar del texto encriptado
        mostrarImagen();
        return;
    }

    // Verificar si el texto contiene mayúsculas o caracteres especiales
    let contieneCaracteresNoPermitidos = /[A-Z!@#$%^&*()_+={}[\]\\|:;"'<,>.?/~]/.test(texto);
    if (contieneCaracteresNoPermitidos) {
        // Mostrar un mensaje de error si el texto contiene caracteres no permitidos
        mostrarError('El texto no puede contener mayúsculas ni caracteres especiales.');
        return;
    } 

    let resultado = '';

    // Reemplazar las palabras encriptadas por sus equivalentes originales
    resultado = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado
    mostrarTextoEncriptado(resultado);
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    document.getElementById('mensaje-error').textContent = mensaje;
}

// Función para mostrar la imagen en lugar del texto encriptado/desencriptado
function mostrarImagen() {
    document.getElementById('imagen-encriptado').classList.remove('hidden');
    document.getElementById('texto-encriptado').classList.add('hidden');
}

// Función para mostrar el texto encriptado/desencriptado
function mostrarTextoEncriptado(texto) {
    document.getElementById('imagen-encriptado').classList.add('hidden');
    document.getElementById('texto-encriptado').classList.remove('hidden');
    document.getElementById('texto-encriptado').textContent = texto;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiarTexto() {
    let resultado = document.getElementById('texto-encriptado').textContent;
    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert('¡Texto copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
