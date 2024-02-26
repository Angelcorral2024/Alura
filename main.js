// Función para encriptar el texto ingresado por el usuario
function encriptar() {
    // Obtener el texto del input
    let texto = document.getElementById('texto').value;
    // Verificar si el texto está vacío
    if (texto.trim() === '') {
        // Mostrar la imagen en lugar del texto encriptado
        mostrarImagen();
        return;
    }

    let resultado = '';

    // Verificar si el texto contiene caracteres especiales, mayúsculas o acentos
    let contieneCaracteresEspeciales = /[^a-z\s]/i.test(texto);
    if (contieneCaracteresEspeciales) {
        // Mostrar un mensaje de error si el texto contiene caracteres no permitidos
        mostrarError('El texto no puede contener caracteres especiales, mayúsculas ni acentos.');
        return;
    } else {
        mostrarError('');
    }

    // Reemplazar las letras según la encriptación definida
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
    // Obtener el texto del input
    let texto = document.getElementById('texto').value;
    // Verificar si el texto está vacío
    if (texto.trim() === '') {
        // Mostrar la imagen en lugar del texto encriptado
        mostrarImagen();
        return;
    }

    let resultado = '';

    // Verificar si el texto contiene caracteres especiales, mayúsculas o acentos
    let contieneCaracteresEspeciales = /[^a-z\s]/i.test(texto);
    if (contieneCaracteresEspeciales) {
        // Mostrar un mensaje de error si el texto contiene caracteres no permitidos
        mostrarError('El texto no puede contener caracteres especiales, mayúsculas ni acentos.');
        return;
    } else {
        mostrarError('');
    }

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
