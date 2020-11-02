class Operador {
    constructor(contador){
      this.contador = 0;
    }
    sumar(suma) {
        this.contador = this.contador + suma;
    }

    restar(resta) {
        this.contador = this.contador - resta;
    }

    resetear() {
        this.contador = 0;
    }

    mostrarContador() {
       return this.contador;
    }
}

const count = new Operador()

