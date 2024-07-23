let intermiami : number = 11;
let dalas : number = 10;
let messi : number = 1;
let juegamessi : boolean = false;
let palabras:string = "me emocione al verlo a messi"

function jugar(equipo1:number, equipo2:number, juegamessi:boolean):void{
    let motivo:string = ""
    if(juegamessi){
        equipo1 += messi;
        motivo= "por que juega messi"
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


