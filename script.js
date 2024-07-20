"use strict";
let intermiami = 11;
let dalas = 10;
let messi = 1;
let juegamessi = false;
let palabras = "me emocione al verlo a messi";
function jugar(equipo1, equipo2, juegamessi) {
    let motivo = "";
    if (juegamessi) {
        equipo1 += messi;
        motivo = "por que juega messi";
    }
    if (equipo1 > equipo2) {
        console.log(`gano el inter Miami ${motivo}`);
    }
    else if (equipo1 < equipo2) {
        console.log("Gano el equipo 2");
    }
    else {
        console.log("Empate");
    }
}
jugar(intermiami, dalas, juegamessi);
