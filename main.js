/*var introduccion = document.getElementById('introduccio');
var allContent = document.getElementsByClassName('all');

document.addEventListener('keydown', function () {
    if (introduccion.style.display === 'block') {
        introduccion.style.display = 'none';
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.display = 'block';
        }
    } else {
        introduccion.style.display = 'block';
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.display = 'none';
        }
    }
});
*/
document.addEventListener('DOMContentLoaded', function () {
    // Elementos del slider de texto
    var textSlider = document.getElementById('textSlider');
    var paragraphs = textSlider.getElementsByTagName('p');
    var currentIndex = 0;

    // Función para cambiar el texto del slider
    function changeText(direction) {
        paragraphs[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + direction + paragraphs.length) % paragraphs.length;
        paragraphs[currentIndex].style.display = 'block';
    }

    // Oculta todos los párrafos excepto el primero al inicio
    for (var i = 1; i < paragraphs.length; i++) {
        paragraphs[i].style.display = 'none';
    }

    // Asocia las funciones de cambio de texto a los botones de navegación
    document.getElementById('prevBtn').addEventListener('click', function () {
        changeText(-1);
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        changeText(1);
    });
});

var isDarkMode = localStorage.getItem('darkMode') === 'enabled';

function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    isDarkMode = !isDarkMode;

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

    body.classList.toggle('dark-mode', isDarkMode);

    // Cambia el ícono del botón según el estado actual
    darkModeToggle.innerHTML = isDarkMode ? '🌞' : '🌙';
}

if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// ... Resto de tu código JavaScript existente ...
