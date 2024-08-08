const palabras = [
    "hola",
    "mundo",
    "python",
    "web",
    "diseño",
    "gráficos",
    "juegos",
    "inteligencia",
    "artificial",
    "machine",
    "learning",
    "deep",
    "neural",
    "networks",
    "anne",
    "juanda"
];

let palabraSeleccionada = "";
let palabraDesordenada = "";
let intentos = 0;
let maximoDeIntentos = 6;
let errores = [];

function desordenarPalabra(palabra) {
    let letras = palabra.split('');
    for (let i = letras.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letras[i], letras[j]] = [letras[j], letras[i]];
    }
    return letras.join('');
}

function nuevaPalabra() {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    palabraDesordenada = desordenarPalabra(palabraSeleccionada);
    document.getElementById('Palabradesordenas').textContent = palabraDesordenada;
    document.getElementById('inputPalabra').value = ""; 
    document.getElementById('inputPalabra').focus(); 
}

function verificarPalabra() {
    const palabraIngresada = document.getElementById('inputPalabra').value;
    if (palabraIngresada.toLowerCase() === palabraSeleccionada.toLowerCase()) {
        alert('bueno');
        nuevaPalabra();
    } else {
        intentos++;
        errores.push(palabraIngresada);
        document.getElementById('tries').textContent = intentos;
        document.getElementById('mistakes').textContent = errores.join(', ');
        
        if (intentos >= maximoDeIntentos) {
            alert('perdistesorry');
            resetearJuego();
        } else {
            alert('error vuelve intentar');
        }
    }
}

function resetearJuego() {
    palabraSeleccionada = "";
    palabraDesordenada = "";
    intentos = 0;
    errores = [];
    document.getElementById('Palabradesordenas').textContent = "";
    document.getElementById('inputPalabra').value = "";
    document.getElementById('tries').textContent = intentos;
    document.getElementById('mistakes').textContent = errores.join(', ');
}

document.getElementById('palabrarandom').addEventListener('click', nuevaPalabra);
document.getElementById('receteaeljuego').addEventListener('click', resetearJuego);

document.getElementById('inputPalabra').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarPalabra();
        event.preventDefault(); 
    }
});

nuevaPalabra();
