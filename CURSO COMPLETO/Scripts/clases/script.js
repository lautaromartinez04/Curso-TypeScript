var PeliculaC = /** @class */ (function () {
    function PeliculaC(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    PeliculaC.prototype.proyectarEnCine = function () {
        console.log("Proyectando en Cine ".concat(this.nombre));
    };
    return PeliculaC;
}());
var peliculaC = new PeliculaC("barbie", ["barbie", "ken"], ["margot robbie", "ryan gosling"]);
var peliculaC1 = new PeliculaC("Oppenheimer", ["Oppenheimer", "Straus"], ["Cillian Murphy", "Robert Downey Jr."]);
pelicula1.proyectarEnCine();
console.log(pelicula1);
