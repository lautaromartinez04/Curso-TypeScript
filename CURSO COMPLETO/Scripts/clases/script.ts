class PeliculaC{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];
    
    constructor(nombre:string,protagonistas:string[],actores:string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }

    proyectarEnCine(){
        console.log (`Proyectando en Cine ${this.nombre}`);
    }
}   

const peliculaC = new PeliculaC("barbie",["barbie","ken"],["margot robbie","ryan gosling"]);
const peliculaC1 = new PeliculaC("Oppenheimer", ["Oppenheimer", "Straus"], ["Cillian Murphy", "Robert Downey Jr."]);

pelicula1.proyectarEnCine();
console.log(pelicula1)