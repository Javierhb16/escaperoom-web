let dinero = 0.01


function irCasa() {
    document.getElementById("escena").style.backgroundImage = "url(img/casa.png)";

    document.getElementById("bobesponja").style.display = "block";
    document.getElementById("dentroCasa").style.display = "block";
    document.getElementById("parada").style.display = "block";
    document.getElementById("casa").style.display = "none";
    document.getElementById("bus").style.display = "none";
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("patio").style.display = "block";
    document.getElementById("parrafo").innerText = "cuanta gente"

}

function irParada() {
    document.getElementById("escena").style.backgroundImage = "url(img/paradaBus.png)";
    document.getElementById("bobesponja").style.display = "none";
    document.getElementById("parada").style.display = "none";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("casa").style.display = "block";
    document.getElementById("bus").style.display = "block";
    document.getElementById("parrafo").innerText = "en la parada"

}



function bus() {
    if (dinero == 1) {
        document.getElementById("escena").style.backgroundImage = "url(img/viviendoenlacalle.png)";
        document.getElementById("parrafo").innerText = "en el autobus"
    } else {
        document.getElementById("parrafo").innerText = "pobre"
    }
}

function dentroCasa() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("parada").style.display = "none";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("bobesponja").style.display = "none";
    document.getElementById("gato").style.display = "block";
    document.getElementById("parrafo").innerText = "estoy en el slon"
}

function salirCasa() {
    document.getElementById("escena").style.backgroundImage = "url(img/casa.png)";
    document.getElementById("dentroCasa").style.display = "block";
    document.getElementById("parada").style.display = "block";
    document.getElementById("bobesponja").style.display = "block";
    document.getElementById("gato").style.display = "none";
    document.getElementById("puertaExit").style.display = "none";

    document.getElementById("parrafo").innerText = "cuanta gente"

}

function irCocina() {
    document.getElementById("escena").style.backgroundImage = "url(img/cocina.png)";
    document.getElementById("gato").style.display = "none";
    document.getElementById("exit").style.display = "none";
    document.getElementById("volverSalon").style.display = "block";
    document.getElementById("bellingham").style.display = "block";

    document.getElementById("cocina").style.display = "none";

    document.getElementById("parrafo").innerHTML = "en la cocina"


}

function volverSalon() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("gato").style.display = "block";
    document.getElementById("exit").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("bellingham").style.display = "none";

    document.getElementById("volverSalon").style.display = "none";

}

function minijuegoBellingham() {
    document.getElementById("escena").style.backgroundImage = "url(img/bellinghamDifuminado.png)";

    
}

function sonidoBob() {
    var audio = document.getElementById("miAudioBob");
    audio.play();
}

function miau() {
    var audio = document.getElementById("miau");
    audio.play();
}

function irPatio() {
    document.getElementById("escena").style.backgroundImage = "url(img/patioTrasero.png)";
    document.getElementById("gato").style.display = "none";
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("minijuegoNano").style.display = "block";
    document.getElementById("volverDentro").style.display = "block";
}

function volverDentro() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("gato").style.display = "block";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById
}


// function minijuegoNano() {
//     document.getElementById("escena").style.backgroundImage = "url(img/fernandoAlonso.png)";
//     document.getElementById("javi").src = "img/javisorprendido.png";
//     document.getElementById("minijuegoNano").display = "none";

//     document.getElementById("habla").textContent = "Javier: ";
//     document.getElementById("habla").style.color = "darkblue";
//     document.getElementById("habla").style.fontWeight = "bold";
//     document.getElementById("parrafo").textContent = "¡PERO SI ES FERNANDO ALONSO!";

//     // document.getElementById("texto").onclick = function() {
//     //     pasarDialogo("Fernando Alonso: ", "darkgreen", "Hola macho el motor Honda no corre");
//     // }

//     // document.getElementById("texto").onclick = function() {
//     //     pasarDialogo("Fernando Alonso: ", "darkgreen", "el motol ase balbacoa");
//     // }

//     // document.getElementById("habla").textContent = "Fernando Alonso: ";
//     // document.getElementById("habla").style.color = "darkgreen";
//     // document.getElementById("parrafo").textContent = "ola";

// }

function pasarDialogo(textContentHabla, styleColor, textContentParrafo) {
    document.getElementById("habla").textContent = textContentHabla;
    document.getElementById("habla").style.color = styleColor;
    document.getElementById("parrafo").textContent = textContentParrafo;
    document.getElementById("habla").style.fontWeight = "bold";
}

let pasoNano = 0;
let puedeJugarNano = true;

function minijuegoNano() {
    if (puedeJugarNano) {
        document.getElementById("escena").style.backgroundImage = "url(img/fernandoAlonso.png)";
        document.getElementById("javi").src = "img/javisorprendido.png";
        document.getElementById("minijuegoNano").style.display = "none";
        pasoNano = 0;
        document.getElementById("texto").onclick = avanzarNano;
        avanzarNano();
    } else {
        document.getElementById("texto").innerText = "Ya has jugado a este minijuego";
    }
}

function avanzarNano() {
    if (pasoNano == 0) {
        pasarDialogo("Javier: ", "darkblue", "¡PERO SI ES FERNANDO ALONSO!");
    }
    else if (pasoNano == 1) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Hola muchacho. ¿Te gusta mi nueva barbacoa?");
    }
    else if (pasoNano == 2) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Es el Aston Martin del 2026, con el nuevo motor Honda");
    }
    else if (pasoNano == 3) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "No puede acabar una carrera");
    }
    else if (pasoNano == 4) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "El motol ase balbacoa");
    }
    else if (pasoNano == 5) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "El motol ase balbacoa");
    }
    else if (pasoNano == 6) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "El motol ase balbacoa");
    }
    
    else {
        document.getElementById("texto").onclick = null; // Terminar diálogo
        // Finalizar el minijuego y volver a la escena anterior
        irPatio();
        // Quitarle la posibilidad al jugador de que vuelva a jugar el minijuego
        puedeJugarNano = false;
    }
    pasoNano++;
}