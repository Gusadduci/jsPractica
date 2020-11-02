class Persona {
    constructor(nombre, apellido, colorDePelo, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.colorDePelo = colorDePelo;
        this.altura = altura;
    }

    
    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    obtenerColorDePelo() {
        return this.colorDePelo;
    }

    obtenerDescripcionCompleta() {
        return `Esta persona se llama ${this.nombre} ${this.apellido}, y su color de pelo es ${this.colorDePelo}`;
    }

    modificarColorDePelo(colorNuevo) {
        this.colorDePelo = colorNuevo;
    }
}

const tucu = new Persona('Andrés', 'Tonello', 'Negro', 1.75)
console.log(tucu.obtenerDescripcionCompleta())