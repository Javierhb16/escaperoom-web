let tiempoInicio;
let tiempoFinalMs;
let dinero = 0.01;

// Bajar volumen de los audios
let audios = document.getElementsByTagName("audio");
for (let i = 0; i < audios.length; i++) {
    audios[i].volume = 0.35;
}

function jugar() {
    document.getElementById("escena").style.backgroundImage = "url(img/paradaBus.png)"
    document.getElementById("bus").style.display = "block";
    document.getElementById("javi").style.display = "block";
    document.getElementById("pinto").style.display = "block";
    document.getElementById("texto").style.display = "block";
    document.getElementById("objetivo").style.display = "block";
    document.getElementById("dinero").style.display = "block";
    document.getElementById("casa").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("objetivo").innerText = "-Objetivo actual: \n Ayudar a Javi a conseguir el dinero que le falta";
    tiempoInicio = performance.now();
    pasarDialogo("Pinto: ", "cadetblue", "Javi se ha cansado de estar en la fiesta más loca de su vida y quiere volver a su casa, pero solo tiene " + dinero + "€ " + "y el autobús cuesta 1€, así que vamos a ayudarle a conseguir el dinero que le falta. Podemos empezar por volver a la fiesta y preguntarle a alguien.");
}

actualizarDinero(dinero);

function actualizarDinero(dinero) {
    document.getElementById("dinero").innerText = "Dinero: " + dinero + "€";
}

function irCasa() {
    document.getElementById("escena").style.backgroundImage = "url(img/casa.png)";
    document.getElementById("bobesponja").style.display = "block";
    document.getElementById("peter").style.display = "block";
    document.getElementById("dentroCasa").style.display = "block";
    document.getElementById("parada").style.display = "block";
    document.getElementById("batman").style.display = "none";
    document.getElementById("casa").style.display = "none";
    document.getElementById("bus").style.display = "none";
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("patio").style.display = "block";
    pasarDialogo("Pinto: ", "cadetblue", "¿Ese es Peter Griffin? Parece que se ha dado un buen golpe. Espera un momento, \n ¿qué hace Bob Esponja volando y tocando un solo de guitarra? Parece que ninguno de los dos puede ayudarnos.");
    document.getElementById("patio").style.display = "none";
}

function irParada() {
    document.getElementById("escena").style.backgroundImage = "url(img/paradaBus2.png)";
    document.getElementById("bobesponja").style.display = "none";
    document.getElementById("peter").style.display = "none";
    document.getElementById("parada").style.display = "none";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("casa").style.display = "block";
    document.getElementById("bus").style.display = "block";
    document.getElementById("batman").style.display = "block";
    document.getElementById("parrafo").innerText = "Parece que alguien se ha pasado con Jugo de la Felicidad..."
    document.getElementById("patio").style.display = "none";
    document.getElementById("patio").style.display = "none";
}

function bus() {
    if (dinero == 1) {
        document.getElementById("escena").style.backgroundImage = "url(img/lobato.png)";
        document.getElementById("casa").style.display = "none";
        document.getElementById("bus").style.display = "none";
        tiempoFinalMs = calcularTiempoFinal();
        document.getElementById("texto").onclick = avanzarLobato;
        avanzarLobato();
    } else {
        pasarDialogo("Pinto: ", "cadetblue", "Todavía te faltan " + (1.00 - dinero).toFixed(2) + "€ para poder coger el autobús");
    }
}

function calcularTiempoFinal() {
    let totalMs = performance.now() - tiempoInicio;
    let segundosTotales = Math.floor(totalMs / 1000);
    let minutos = Math.floor(segundosTotales / 60);
    let segundos = segundosTotales % 60;

    if (minutos > 0) {
        return minutos + " minutos y " + segundos + " segundos";
    } else {
        return segundos + " segundos";
    }
}

let pasoLobato = 0;

function avanzarLobato() {
    document.getElementById("texto").style.cursor = "pointer";    
    if (pasoLobato == 0) {
        document.getElementById("javi").src = "img/javisorprendido.png";
        pasarDialogo("Lobato: ", "orange", "¡Qué pasa Javi! ¡Vaya fiesta te has pegado!");
    }
    else if (pasoLobato == 1) {
        pasarDialogo("Javier: ", "darkblue", "¿Antonio Lobato? ¿Me puedes decir cuanto vale mi co...?");
    }
    else if (pasoLobato == 2) {
        document.getElementById("escena").style.backgroundImage = "url(img/lobatoEnfadado.png)";
        pasarDialogo("Lobato: ", "orange", "¡NO S@#%#@$! ¡NO TE VOY A DECIR CUANTO VALE TU COCHE!");
    }
    else if (pasoLobato == 3) {
        document.getElementById("javi").src = "img/javiDecepcionado.png";
        pasarDialogo("Javier: ", "darkblue", "Vale vale, perdón.");
    }
    else if (pasoLobato == 4) {
        document.getElementById("escena").style.backgroundImage = "url(img/lobato.png)";
        pasarDialogo("Lobato: ", "orange", "No, perdóname a mi, no debería haberte gritado");
    }
    else if (pasoLobato == 5) {
        pasarDialogo("Lobato: ", "orange", "Mira, por ser tú te llevo gratis a casa. ¡Venga, sube!");
    }
    else if (pasoLobato == 6) {
        document.getElementById("javi").src = "img/javi.png";
        pasarDialogo("Javier: ", "darkblue", "Bueno, al final tanto esfuerzo para nada, pero como decía mi abuelo: “Bien está lo que bien acaba”");
    }
    else if (pasoLobato == 7) {
        pasarDialogo("Pinto: ", "cadetblue", "¡Has terminado el juego! Y solo te ha llevado " + tiempoFinalMs + ".");
    }
    else {
        document.getElementById("texto").style.cursor = "default";    
        document.getElementById("texto").onclick = null;
        alert("¡Juego completado en " + tiempoFinalMs + "!");
        location.reload(); // Reinicia el juego
    }
    pasoLobato++;
}

function dentroCasa() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("parada").style.display = "none";
    document.getElementById("peter").style.display = "none";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("bobesponja").style.display = "none";
    document.getElementById("gato").style.display = "block";
    pasarDialogo("Pinto: ", "cadetblue", "Si yo hubiera montado esta fiesta todo sería más divertido...");
    document.getElementById("cocina").style.display = "block";
    document.getElementById("patio").style.display = "block";
    if (!botellasApagadas) {
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "block";
        }
    }
    document.getElementById("banyo").style.display = "block";
}

function salirCasa() {
    document.getElementById("escena").style.backgroundImage = "url(img/casa.png)";
    document.getElementById("dentroCasa").style.display = "block";
    document.getElementById("peter").style.display = "block";
    document.getElementById("parada").style.display = "block";
    document.getElementById("bobesponja").style.display = "block";
    document.getElementById("gato").style.display = "none";
    document.getElementById("puertaExit").style.display = "none";
    if (!botellasApagadas) {
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "none";
        }
    }
    document.getElementById("banyo").style.display = "none";
    document.getElementById("patio").style.display = "none";
    document.getElementById("cocina").style.display = "none";
    pasarDialogo("Pinto: ", "cadetblue", "¿Ese es Peter Griffin? Parece que se ha dado un buen golpe. Espera un momento, \n ¿qué hace Bob Esponja volando y tocando un solo de guitarra? Parece que ninguno de los dos puede ayudarnos.");
}

function irCocina() {
    document.getElementById("escena").style.backgroundImage = "url(img/cocina.png)";
    document.getElementById("gato").style.display = "none";
    document.getElementById("minijuegoBellingham").style.display = "block";
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("volverSalon").style.display = "block";
    document.getElementById("patio").style.display = "none";
    document.getElementById("cocina").style.display = "none";

    if (!botellasApagadas) {
        pasarDialogo("Pinto: ", "cadetblue", "Traele las tres botellas de Jugo de la Felicidad a Bellingham");
        if (document.getElementById("botella1") != null) {
            document.getElementById("botella1").style.display = "block";
        }
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "none";
        }
    } else {
        pasarDialogo("Pinto: ", "cadetblue", "¿Qué hace aquí Bellingham?");
    }
    document.getElementById("banyo").style.display = "none";
}

function volverSalon() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("gato").style.display = "block";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("minijuegoBellingham").style.display = "none";
    document.getElementById("volverSalon").style.display = "none";
    document.getElementById("patio").style.display = "block";
    if (!botellasApagadas) {
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "block";
        }
        if (document.getElementById("botella1") != null) {
            document.getElementById("botella1").style.display = "none";
        }
    }
    pasarDialogo("Pinto: ", "cadetblue", "Si yo hubiera montado esta fiesta todo sería más divertido...");
    document.getElementById("banyo").style.display = "block";
}

let pasoBellingham = 0;
let puedeJugarBellingham = true;
let segundaConverBellingham = false;
let botellasApagadas = true;
let botellasObtenidas = 0;

function minijuegoBellingham() {
    if (segundaConverBellingham) {
        if (botellasObtenidas == 0) {
            pasarDialogo("Pinto: ", "darkblue", "Todavia te quedan " + (3 - botellasObtenidas) + " botellas por conseguir");
        } else if (botellasObtenidas == 1) {
            pasarDialogo("Pinto: ", "darkblue", "Todavia te quedan " + (3 - botellasObtenidas) + " botellas por conseguir");
        } else if (botellasObtenidas == 2) {
            pasarDialogo("Pinto: ", "darkblue", "Todavia te quedan " + (3 - botellasObtenidas) + " botellas por conseguir");
        } else if (botellasObtenidas == 3) {
            document.getElementById("texto").onclick = avanzarBellingham;
            avanzarBellingham();
        }
    } else if (puedeJugarBellingham) {
        document.getElementById("escena").style.backgroundImage = "url(img/bellinghamDifuminado.png)";
        document.getElementById("minijuegoBellingham").style.display = "none";
        document.getElementById("volverSalon").style.display = "none";
        document.getElementById("patio").style.display = "none";
        pasoBellingham = 0;
        document.getElementById("texto").onclick = avanzarBellingham;
        avanzarBellingham();
    } else {
        pasarDialogo("Pinto: ", "cadetblue", "Ahora Bellingham rebosa felicidad");
    }
}


function spawnBotellas() {
    document.getElementById("escena").style.backgroundImage = "url(img/cocina.png)";
    botellasApagadas = false;
    segundaConverBellingham = true;
    irCocina();
}

function cogerBotella1() {
    document.getElementById("botella1").remove();
    botellasObtenidas++;
}

function cogerBotella2() {
    document.getElementById("botella2").remove();
    botellasObtenidas++;
}

function cogerBotella3() {
    document.getElementById("botella3").remove();
    botellasObtenidas++;
}

function avanzarBellingham() {

    if (botellasObtenidas == 0 && segundaConverBellingham == false) {
        document.getElementById("texto").style.cursor = "pointer";    
        if (pasoBellingham == 0) {
            pasarDialogo("Javier: ", "darkblue", "¿Bellingham? ¿Pero tú no tenías partido hoy?");
        } else if (pasoBellingham == 1) {
            pasarDialogo("Bellingham: ", "darkorchid", "Yes my friendo, pero me he routo the meniscou. For me hoy es día libre");
        } else if (pasoBellingham == 2) {
            pasarDialogo("Javier: ", "darkblue", "Bueno, si tú lo dices... Oye, ¿por casualidad no me podrás prestar algo de dinero?");
        } else if (pasoBellingham == 3) {
            pasarDialogo("Bellingham: ", "darkorchid", "Solo tengou esta moneda. Te la puedou dar if me traes three boteyias de Jugou de la Felicidad");
        } else if (pasoBellingham == 4) {
            pasarDialogo("Javier: ", "darkblue", "Me parece bien, voy a buscarlas");
        } else if (pasoBellingham == 5) {
            document.getElementById("texto").style.cursor = "default";    
            document.getElementById("texto").onclick = null;
            document.getElementById("objetivo").innerText = "-Objetivo actual: \n Conseguirle las botellas a Bellingham";
            spawnBotellas();
        }
    } 
    else {
        document.getElementById("escena").style.backgroundImage = "url(img/bellinghamDifuminado.png)";
        document.getElementById("minijuegoBellingham").style.display = "none";
        document.getElementById("volverSalon").style.display = "none";
        if (pasoBellingham == 6) {
            document.getElementById("texto").style.cursor = "pointer";
            pasarDialogo("Javier: ", "darkblue", "He vuelto Bellingham. Aquí tienes las tres");
        } else if (pasoBellingham == 7) {
            pasarDialogo("Bellingham: ", "darkorchid", "Grasias amigou, lo prometidou es deuda. Aquí la tienes");
        } else if (pasoBellingham == 8) {
            let audio = document.getElementById("audioBellingham");
            audio.play();
            document.getElementById("texto").style.fontWeight = "bold";
            document.getElementById("javi").src = "img/javiDinero.png";
            document.getElementById("monedaNano").src = "img/monedanano2.png";
            dinero += 0.33;
            actualizarDinero(dinero);
            document.getElementById("destello").style.display = "block";
            pasarDialogo("", "black", "Has obtenido 33 NanoCéntimos. Te quedan " + (1.00 - dinero).toFixed(2) + "€ para poder coger el autobús");
            segundaConverBellingham = false
        }
        else {
            document.getElementById("escena").style.backgroundImage = "url(img/cocina.png)";
            document.getElementById("texto").style.cursor = "default";
            document.getElementById("texto").onclick = null; // Terminar diálogo
            // Finalizar el minijuego y volver a la escena anterior
            if (dinero == 1) {
                document.getElementById("objetivo").innerText = "-Objetivo actual: \n Volver al bus";
            } else {
                document.getElementById("objetivo").innerText = "-Objetivo actual: \n Ayudar a Javi a conseguir el dinero que le falta";
            }
            document.getElementById("destello").style.display = "none";
            botellasApagadas = true;
            irCocina();
            document.getElementById("javi").src = "img/javi.png";
            // Quitarle la posibilidad al jugador de que vuelva a jugar el minijuego
            puedeJugarBellingham = false;
            // Cambiar las letras del úlitmo diálogo a su estado normal
            document.getElementById("texto").style.fontWeight = "normal";
            document.getElementById("monedaNano").src = "";
        }
    }
    pasoBellingham++;
}

function sonidoBob() {
    var audio = document.getElementById("miAudioBob");
    audio.play();
}

function miau() {
    var audio = document.getElementById("miau");
    audio.play();
}

function audioPeter() {
    var audio = document.getElementById("sonidoPeter");
    audio.play();
}

function audioHomer() {
    var audio = document.getElementById("sonidoHomer");
    audio.play();
}

function sonidoNariz() {
    var audio = document.getElementById("fredy");
    audio.play();
}

function noche() {
    var audio = document.getElementById("audioBatman");
    audio.play();
}

function irPatio() {
    document.getElementById("escena").style.backgroundImage = "url(img/patioTrasero.png)";
    document.getElementById("gato").style.display = "none";
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("minijuegoNano").style.display = "block";
    document.getElementById("volverDentro").style.display = "block";
    document.getElementById("homer").style.display = "block";
    document.getElementById("cocina").style.display = "none";
    if (!botellasApagadas) {
        if (document.getElementById("botella3") != null) {
            document.getElementById("botella3").style.display = "block";
        }
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "none";
        }
    }
    pasarDialogo("Pinto: ", "cadetblue", "¿Quién está más caliente: la barbacoa, el tío del mono verde, o yo al ver las dos cosas?");
    document.getElementById("banyo").style.display = "none";
}

function volverDentro() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("gato").style.display = "block";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("banyo").style.display = "block";
    document.getElementById("homer").style.display = "none";
    document.getElementById("volverDentro").style.display = "none";
    document.getElementById("minijuegoNano").style.display = "none";
    document.getElementById("patio").style.display = "block";
    if (!botellasApagadas) {
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "block";
        }
        if (document.getElementById("botella3") != null) {
            document.getElementById("botella3").style.display = "none";
        }
    }
    pasarDialogo("Pinto: ", "cadetblue", "Si yo hubiera montado esta fiesta todo sería más divertido...");
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
        if (document.getElementById("botella3") != null) {
            document.getElementById("botella3").style.display = "none";
        }
        document.getElementById("escena").style.backgroundImage = "url(img/fernandoAlonso.png)";
        document.getElementById("javi").src = "img/javisorprendido.png";
        document.getElementById("minijuegoNano").style.display = "none";
        document.getElementById("volverDentro").style.display = "none";
        document.getElementById("patio").style.display = "none";
        document.getElementById("homer").style.display = "none";
        pasoNano = 0;
        document.getElementById("texto").onclick = avanzarNano;
        avanzarNano();
    } else {
        pasarDialogo("Pinto: ", "cadetblue", "Has dejado a Alonso sin un duro, a pedir limosna a otro lado");
    }
}

function avanzarNano() {
    if (pasoNano == 0) {
        document.getElementById("texto").style.cursor = "pointer";
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
        document.getElementById("texto").style.cursor = "default";
        preguntasMinijuegoNano();
    }
    else if (pasoNano == 8) {
        document.getElementById("texto").style.cursor = "pointer";
        pasarDialogo("Fernando Alonso: ", "darkgreen", "¡PREMIO PARA EL CABALLERO!");
        document.getElementById("javi").src = "img/javisorprendido.png";
    }
    else if (pasoNano == 9) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Da igual cuál hubieses elegido, todas daban 33");
    }
    else if (pasoNano == 10) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Al final lo importante es hacerlo todo de corazón, aunque no tengas ni idea de lo que estás haciendo");
    }
    else if (pasoNano == 11) {
        pasarDialogo("Fernando Alonso: ", "darkgreen", "Toma, te has ganado esto por ser un tío tan listo");
    }
    else if (pasoNano == 12) {
        let audio = document.getElementById("audioNano");
        audio.play();
        document.getElementById("texto").style.fontWeight = "bold";
        document.getElementById("javi").src = "img/javiDinero.png";
        document.getElementById("monedaNano").src = "img/monedanano1.png";
        dinero += 0.33;
        actualizarDinero(dinero);
        document.getElementById("destello").style.display = "block";
        document.getElementById("texto").style.fontWeight = "bold";
        pasarDialogo("", "black", "Has obtenido 33 NanoCéntimos. Te quedan " + (1.00 - dinero).toFixed(2) + "€ para poder coger el autobús");
    }
    else {
        document.getElementById("texto").onclick = null; // Terminar diálogo
        // Finalizar el minijuego y volver a la escena anterior
        if (dinero == 1) {
            document.getElementById("objetivo").innerText = "-Objetivo actual: \n Volver al bus";
        } 
        document.getElementById("texto").style.cursor = "default";
        document.getElementById("destello").style.display = "none";
        irPatio();
        document.getElementById("javi").src = "img/javi.png";
        // Quitarle la posibilidad al jugador de que vuelva a jugar el minijuego
        puedeJugarNano = false;
        // Cambiar las letras del úlitmo diálogo a su estado normal
        document.getElementById("texto").style.fontWeight = "normal";
        pasarDialogo("Pinto: ", "cadetblue", "Me da a mi que los japoneses no van a mejorar el motor...");
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
        e[i].onclick = function () {
            pasoNano++;
            document.getElementById("texto").onclick = avanzarNano;
            document.getElementById("ecuaciones").style.display = "none";
            avanzarNano();
        }
    }
}

function irBanyo() {
    document.getElementById("escena").style.backgroundImage = "url(img/banyo.png)";
    document.getElementById("puertaExit").style.display = "none";
    document.getElementById("gato").style.display = "none";
    document.getElementById("cocina").style.display = "none";
    document.getElementById("banyo").style.display = "none";
    document.getElementById("patio").style.display = "none";
    document.getElementById("salirBanyo").style.display = "block";
    document.getElementById("minijuegoBanyo").style.display = "block";
    document.getElementById("nariz").style.display = "block";
    if (!botellasApagadas) {
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "none";
        }
    }
    pasarDialogo("Pinto: ", "cadetblue", "Esto ya se va pareciendo más a mis fiestas");

}

function salirBanyo() {
    document.getElementById("escena").style.backgroundImage = "url(img/salon.png)";
    document.getElementById("puertaExit").style.display = "block";
    document.getElementById("gato").style.display = "block";
    document.getElementById("cocina").style.display = "block";
    document.getElementById("banyo").style.display = "block";
    document.getElementById("patio").style.display = "block";
    document.getElementById("salirBanyo").style.display = "none";
    document.getElementById("minijuegoBanyo").style.display = "none";
    document.getElementById("nariz").style.display = "none";
    if (!botellasApagadas) {
        if (document.getElementById("botella2") != null) {
            document.getElementById("botella2").style.display = "block";
        }
    }
    pasarDialogo("Pinto: ", "cadetblue", "Si yo hubiera montado esta fiesta todo sería más divertido...");
}

let puedeJugarCajaFuerte = true;

function minijuegoBanyo() {
    document.getElementById("nariz").style.display = "none";
    if (puedeJugarCajaFuerte) {
        crearKeypad();
        document.getElementById("escena").style.backgroundImage = "url(img/keypad.png)";
        document.getElementById("minijuegoBanyo").style.display = "none";
        document.getElementById("salirBanyo").style.display = "none";
    } else {
        pasarDialogo("Pinto: ", "cadetblue", "“La riqueza no consiste en tener grandes posesiones, sino en tener pocas necesidades.” — Epicteto");
    }
}

function crearKeypad() {
    pasarDialogo("Pinto: ", "cadetblue", "Hay un número escrito con rotulador en el keypad. Prueba a ver qué sale");
    const contenedor = document.getElementById("escena");
    const pantalla = document.createElement("div");
    pantalla.id = "pantalla";
    pantalla.style.display = "block";
    contenedor.appendChild(pantalla);
    // Crear botones
    for (let i = 0; i <= 9; i++) {
        let boton = document.createElement("div");
        boton.className = "boton";
        boton.id = "btn" + i;
        boton.onclick = function () {
            teclear(i);
        };
        boton.style.display = "block";
        contenedor.appendChild(boton);
    }
    // Crear botón de borrar
    let borrar = document.createElement("div");
    borrar.className = "boton borrar";
    borrar.id = "borrar";
    borrar.onclick = function () {
        borrarPantalla();
    };
    borrar.style.display = "block";
    contenedor.appendChild(borrar);
    // Crear botón de enviar
    let enviar = document.createElement("div");
    enviar.className = "boton enviar";
    enviar.id = "enviar";
    enviar.onclick = function () {
        comprobarCodigo();
    };
    enviar.style.display = "block";
    contenedor.appendChild(enviar);

    // Crear huellas encima de los botones
    for (let i = 1; i <= 3; i++) {
        let huella = document.createElement("div");
        huella.className = "huella";
        huella.id = "huella" + i;
        huella.style.display = "block";
        contenedor.appendChild(huella);
    }

    // Crear botón para volver al baño
    let volverBanyo = document.createElement("div");
    volverBanyo.id = "volverBanyo";
    volverBanyo.className = "volverBanyo";
    volverBanyo.innerText = "Volver al baño";
    contenedor.appendChild(volverBanyo);
    volverBanyo.onclick = function () {
        document.getElementById("escena").style.backgroundImage = "url(img/banyo.png)";
        document.getElementById("salirBanyo").style.display = "block";
        document.getElementById("minijuegoBanyo").style.display = "block";
        document.getElementById("nariz").style.display = "block";
        document.getElementById("pantalla").remove();
        pasarDialogo("Pinto: ", "cadetblue", "Esto ya se va pareciendo más a mis fiestas");
        let botones = document.getElementsByClassName("boton");
        for (let i = 0; i < botones.length; i++) {
            botones[i].remove();
            i--;
        }
        let huellas = document.getElementsByClassName("huella");
        for (let i = 0; i < huellas.length; i++) {
            huellas[i].remove();
            i--;
        }
        if (document.getElementById("imagenNanoNumerin") != null) {
            document.getElementById("imagenNanoNumerin").remove();
        }
        volverBanyo.remove();
    }
}

function teclear(tecla) {
    if (document.getElementById("pantalla").innerText == "INCORRECTO") {
        document.getElementById("pantalla").innerText = "";
    }
    if (document.getElementById("pantalla").innerText.length < 3) {
        document.getElementById("pantalla").innerText += tecla;
    }
}

function borrarPantalla() {
    document.getElementById("pantalla").innerText = "";
}

function comprobarCodigo() {
    let codigoCorrecto = 239;
    let introducido = parseInt(document.getElementById("pantalla").innerText);
    if (introducido == 333) {
        pasarDialogo("Pinto: ", "cadetblue", "Pues igual ese numerín no era el correcto. O sí, depende cómo lo mires");
        if (document.getElementById("imagenNanoNumerin") == null) {
            let imagenNanoNumerin = document.createElement("img");
            imagenNanoNumerin.style.display = "block";
            imagenNanoNumerin.src = "img/numerin.png";
            imagenNanoNumerin.className = "imagenNanoNumerin";
            imagenNanoNumerin.id = "imagenNanoNumerin";
            document.getElementById("escena").appendChild(imagenNanoNumerin);
        }
        document.getElementById("pantalla").innerText = "";
        let audio = document.getElementById("audioWomp");
        audio.play();
    }
    else if (introducido != codigoCorrecto) {
        document.getElementById("pantalla").innerText = "INCORRECTO";
    }
    else if (introducido == codigoCorrecto) {
        abrirCajaFuerte();
    }
}

function abrirCajaFuerte() {
    if (document.getElementById("imagenNanoNumerin") != null) {
        document.getElementById("imagenNanoNumerin").style.display = "none";
    }
    let botones = document.getElementsByClassName("boton");
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.display = "none";
    }
    let huellas = document.getElementsByClassName("huella");
    for (let i = 0; i < huellas.length; i++) {
        huellas[i].style.display = "none";
    }
    document.getElementById("pantalla").style.display = "none";

    document.getElementById("texto").onclick = function () {
        avanzarCajaFuerte();
    }
    document.getElementById("volverBanyo").remove();
    avanzarCajaFuerte();
}

let pasoCajaFuerte = 0;

function avanzarCajaFuerte() {
    if (pasoCajaFuerte == 0) {
        document.getElementById("texto").style.cursor = "pointer";
        document.getElementById("javi").src = "img/javisorprendido.png";
        pasarDialogo("Javier: ", "darkblue", "¡Pues sí que tiene dinero esta gente!");
        document.getElementById("escena").style.backgroundImage = "url(img/cajaFuerteAbierta.png)";
    } else if (pasoCajaFuerte == 1) {
        document.getElementById("javi").src = "img/javi.png";
        pasarDialogo("Javier: ", "darkblue", "Bueno, creo que voy a llevarme solo lo que necesito");
    } else if (pasoCajaFuerte == 2) {
        let audio = document.getElementById("audioYay");
        audio.play();
        document.getElementById("destello").style.display = "block";
        document.getElementById("texto").style.fontWeight = "bold";
        document.getElementById("javi").src = "img/javiDinero.png";
        dinero += 0.33;
        actualizarDinero(dinero);
        pasarDialogo("", "black", "Has obtenido 33 NanoCéntimos. Te quedan " + (1.00 - dinero).toFixed(2) + "€ para poder coger el autobús");
    } else {
        document.getElementById("texto").style.cursor = "default";
        if (dinero == 1) {
            document.getElementById("objetivo").innerText = "-Objetivo actual: \n Volver al bus";
        }
        document.getElementById("destello").style.display = "none";
        document.getElementById("javi").src = "img/javi.png";
        document.getElementById("escena").style.backgroundImage = "url(img/banyo.png)";
        document.getElementById("minijuegoBanyo").style.display = "block";
        document.getElementById("salirBanyo").style.display = "block";
        document.getElementById("nariz").style.display = "block";
        document.getElementById("texto").onclick = "null";
        pasarDialogo("Pinto: ", "cadetblue", "Esto ya se va pareciendo más a mis fiestas");
        document.getElementById("parrafo").style.fontWeight = "normal";
        puedeJugarCajaFuerte = false;
    }
    pasoCajaFuerte++;
}