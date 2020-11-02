const numbers = [1,2,3,4,7,6,14,5,8,12];
function findDuplic(arr){
    for (let i = 0; i < arr.length; i++){
        
        const contCompare = arr[i] / 2;
        let cont = contCompare % 1;
        if (cont !== 0){
           arr.splice(i, 1)
        }
        
    }
}
findDuplic(numbers);