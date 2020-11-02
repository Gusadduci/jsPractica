function persona(nombre, apellido, colorDePelo) {
    return {
        obtenerNombreCompleto: function(){
            return `${nombre} ${apellido}`
        },
        obtenerColorDePelo: function() {
            return colorDePelo;
        },
        obtenerDescripcionCompleta: function () {
            return `Esta persona se llama ${nombre} ${apellido}, y su color de pelo es ${colorDePelo}`
        },
        modificarColorDePelo: function(colorNuevo){
            colorDePelo = colorNuevo;
        }
    }
}


const tucu = new persona ('Andrés', 'Tonelo', 'Negro');
const norman = new persona ('Norman', 'Capcha', 'rojo');
const ro = new persona ('Rocio', 'Reartes', 'Castaño');

console.log("el color del pelo del tucu es: ", tucu.obtenerColorDePelo());
console.log("el nombre completo de ro es: ", ro.obtenerNombreCompleto());
console.log(norman.obtenerDescripcionCompleta());