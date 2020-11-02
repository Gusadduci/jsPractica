const numbers = [1,2,3,2,3,4,1,7,6,14,5,];
function findDuplic(arr){

    for (let i = 0; i < arr.length; i++){
        const contCompare = arr[i]
      
        for (let j = i; j < arr.length; j++){
            const elementCompare = arr[j];
            
                if (contCompare == elementCompare && i !== j){
                    
                    console.log(contCompare)
                }
            
        }
    }

}
findDuplic(numbers);