var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    Sorteo.prototype.setTicket = function (numero) {
        this.ticket = numero;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    Sorteo.prototype.sortear = function () {
        return "Para este nombre ".concat(this.nombre, " el numero es: ").concat(this.getTicket());
    };
    return Sorteo;
}());
var sorteo = new Sorteo("Lautaro");
sorteo.setTicket("S22");
console.log(sorteo.sortear());
