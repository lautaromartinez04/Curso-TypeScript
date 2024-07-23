interface ProgramadorI {
    nombre:string,
    apellidos:string,
    tecnologias:string[],
    tomarMate: boolean|null
}

let programadorI1:ProgramadorI = {
    nombre: "lautaro",
    apellidos:"Martinez",
    tecnologias:["react"],
    tomarMate: true
}

let programadorI2 : ProgramadorI = {
    nombre: "lautaro",
    apellidos:"Martinez",
    tecnologias:["react"],
    tomarMate: null
}


