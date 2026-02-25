let dinero = 0.01
actualizarDinero(dinero);

function actualizarDinero(dinero) {
    document.getElementById("dinero").innerText = dinero + "€";
}

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
        document.getElementById("cocina").style.display = "block";
document.getElementById("bobesponja").style.display = "none";
    document.getElementById("gato").style.display = "block";
    document.getElementById("parrafo").innerText = "estoy en el slon";
    document.getElementById("cocina").style.display = "block";
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
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("volverSalon").style.display = "block";
    document.getElementById("minijuegoBellingham").style.display = "block";
    document.getElementById("patio").style.display = "none";
    document.getElementById("cocina").style.display = "none";

    document.getElementById("parrafo").innerHTML = "en la cocina"


}

function volverSalon() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("gato").style.display = "block";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("minijuegoBellingham").style.display = "none";
    document.getElementById("volverSalon").style.display = "none";
    document.getElementById("patio").style.display = "block";
}

function minijuegoBellingham() {
    document.getElementById("escena").style.backgroundImage = "url(img/bellinghamDifuminado.png)";
    document.getElementById("volverSalon").style.display = "none";
    document.getElementById("minijuegoBellingham").style.display = "none";
    
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
    document.getElementById("cocina").style.display = "none";
}

function volverDentro() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("gato").style.display = "block";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("volverDentro").style.display = "none";
    document.getElementById("minijuegoNano").style.display = "none";
    document.getElementById("patio").style.display = "block";

}

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
        document.getElementById("volverDentro").style.display = "none";
        document.getElementById("patio").style.display = "none";
        pasoNano = 0;
        document.getElementById("texto").onclick = avanzarNano;
        avanzarNano();
    } else {
        pasarDialogo("Pinto: ", "gray", "Has dejado a Alonso sin un duro, a pedir limosna a otro lado");
    }
}

function avanzarNano() {
    if (pasoNano == 0) {
        pasarDialogo("Javier: ", "darkblue", "¡PERO SI ES FERNANDO ALONSO!");
    }
    else if (pasoNano == 1) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Hombre claro, ¿quién va a ser? El único piloto que ha convertido un Aston Martin en una Cecotec de jardín");
    }
    else if (pasoNano == 2) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "El motor es decepcionante, no sobrevive más de dos minutos sin hacer chamusquina");
    }
    else if (pasoNano == 3) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Este año el coche no corre, pero por lo menos las chistorras salen cojonudas");
    }
    else if (pasoNano == 4) {
        pasarDialogo("Javier: ", "darkblue", "Bueno, supongo que entonces la 33 tampoco llegará este año...");
        document.getElementById("javi").src = "img/javiDecepcionado.png";
    }
    else if (pasoNano == 5) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Alegra esa cara, chaval. Mira, te voy a demostrar que sabes más que los ingenieros de Honda");
    }
    else if (pasoNano == 6) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Dime, ¿cuál de las siguientes ecuaciones da '33' como resultado?");
        document.getElementById("javi").src = "img/javiPensativo.png";
        preguntasMinijuegoNano();
    }
    else if (pasoNano == 8) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "¡PREMIO PARA EL CABALLERO!");
        document.getElementById("javi").src = "img/javisorprendido.png";
    }
    else if (pasoNano == 9) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Da igual cuál hubieses elegido, todas daban 33");
    }
    else if (pasoNano == 10) {
        // pasarDialogo("Fernando Alonso: ", "darkgreen", "Es como la estrategia de carrera, da igual cuál usemos, porque con todas quedamos últimos");
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Al final lo importante es hacerlo todo de corazón, aunque no tengas ni idea de lo que estás haciendo");
    }
    else if (pasoNano == 11) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Toma, te has ganado esto por ser un tío tan listo");
    }
    else if (pasoNano == 12) {
        document.getElementById("texto").style.fontWeight = "bold";
        document.getElementById("javi").src = "img/javiDinero.png";
        document.getElementById("monedaNano").src = "img/monedanano1.png";
        dinero += 0.33;
        actualizarDinero(dinero);
        pasarDialogo("", "black", "Has obtenido 33 NanoCéntimos. Te quedan " + (1.00 - dinero) + " para poder coger el autobús");
    }
    else {
        document.getElementById("texto").onclick = null; // Terminar diálogo
        // Finalizar el minijuego y volver a la escena anterior
        irPatio();
        document.getElementById("javi").src = "img/javi.png";
        // Quitarle la posibilidad al jugador de que vuelva a jugar el minijuego
        puedeJugarNano = false;
        // Cambiar las letras del úlitmo diálogo a su estado normal
        document.getElementById("texto").style.fontWeight = "normal";
        document.getElementById("monedaNano").src = "";
    }
    pasoNano++;
}

function preguntasMinijuegoNano() {
    // Pausar el avance de diálogos durante esta parte del minijuego
    document.getElementById("texto").onclick = null;

    let ecuaciones = document.getElementById("ecuaciones");
    let e1 = document.createElement("img");
    let e2 = document.createElement("img");
    let e3 = document.createElement("img");
    e1.src = "img/formula1.png";
    e2.src = "img/formula2.png";
    e3.src = "img/formula3.png";
    e1.className = "ecuacion";
    e2.className = "ecuacion";
    e3.className = "ecuacion";
    ecuaciones.appendChild(e1);
    ecuaciones.appendChild(e2);
    ecuaciones.appendChild(e3);

    ecuaciones.style.display = "flex";
    ecuaciones.style.flexDirection = "column";
    ecuaciones.style.position = "absolute";

    ganarMinijuegoNano();
}

function ganarMinijuegoNano() {
    let e = document.getElementsByClassName("ecuacion");
    for (let i = 0; i < e.length; i++) {
        e[i].onclick = function() {
            pasoNano++;
            document.getElementById("texto").onclick = avanzarNano;
            document.getElementById("ecuaciones").style.display = "none";
            avanzarNano();
        }
    }
}