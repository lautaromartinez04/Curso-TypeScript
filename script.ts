class Sorteo<T> {

    private ticket?: T;

    constructor ( private nombre: string ) {}

    setTicket( numero: T ) {
        this.ticket = numero;
    }

    getTicket() {
        return this.ticket;
    }

    public sortear() : string {
        return `Para este nombre ${this.nombre} el numero es: ${this.getTicket()}`;
    }
}

let sorteo = new Sorteo<String>("Lautaro");
sorteo.setTicket("S22");

console.log(sorteo.sortear())