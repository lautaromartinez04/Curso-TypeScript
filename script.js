var Pelicula = /** @class */ (function () {
    function Pelicula(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    Pelicula.prototype.proyectarEnCine = function () {
        console.log("Proyectando en Cine ".concat(this.nombre));
    };
    return Pelicula;
}());
var pelicula = new PeliculaC("barbie", ["barbie", "ken"], ["margot robbie", "ryan gosling"]);
var pelicula1 = new PeliculaC("Oppenheimer", ["Oppenheimer", "Straus"], ["Cillian Murphy", "Robert Downey Jr."]);
pelicula.proyectarEnCine();
console.log(pelicula1);
