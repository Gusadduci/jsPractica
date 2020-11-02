const arr = [ { name: "Juani", age: 25 }, { name: "Dami", age: 74 }, { name: "Marcelo", age: 52 } ]

function mayor(arr){
    let cont = "";
    for (let i = 0; i < arr.length; i++){
        const contCompare = arr[i].age
        let esMasGrande = true;
        
        for (let j = 0; j < arr.length; j++){
            const elementCompare = arr[j].age;
            
                if (contCompare < elementCompare && i !== j){
                    
                    esMasGrande = false;
                    
                }
   
        }
        if (esMasGrande == true){
            cont = arr[i].name

        }
    }
    console.log(`la persona mas grande es ${cont}`)
}
mayor(arr);
//solucion 2

let arrEdades = arr.map((person) => {
    return person.age;
})
let mayorEdad = Math.max.apply(Math, arrEdades);

const personUp = arr.find((person) => {
    return person.age == mayorEdad;
});

console.log(`la persona mayor del array es ${personUp.name}, y su edad es ${personUp.age}`)


//solucion 3

const sortedArray = arr.sort((a,b) => b.age - a.age);

console.log(`la persona mayor del array es: ${sortedArray[0].name}`)