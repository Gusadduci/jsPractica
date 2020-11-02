const numbers = [1,2,3,2,3,4,1,7,6,14,5,14,14,74];
function findDuplic(arr){
    let cont = "";
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        const contCompare = arr[i]
        let esMasGrande = true;
        
        for (let j = 0; j < arr.length; j++){
            const elementCompare = arr[j];
            
                if (contCompare < elementCompare && i !== j){
                    
                    esMasGrande = false;
                    
                }
                
                
            
        }
        if (esMasGrande == true){
            cont = contCompare
            count++
        }
    }
    console.log(cont)
    console.log(count)
}
findDuplic(numbers);