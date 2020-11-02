const numbers = [1,2,3,2,3,4,1,7,6,14,5,];
function findDuplic(arr){
let count = 0;
    for (let i = 0; i < arr.length; i++){
        const contCompare = arr[i]
        let esRepetido = false;
        for (let j = 0; j < arr.length; j++){
            const elementCompare = arr[j];
            
                if (contCompare == elementCompare && i !== j){
                    esRepetido = true;
                }
            
        }

        if (esRepetido == false){
            console.log(contCompare)
        }    
    }

}
findDuplic(numbers);