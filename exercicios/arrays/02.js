
// crie uma função que recebe um array de 3 numeros e coloque eles em ordem crescente
function sort(arr){
    let min=0;
    let x = 0;

    for (let i = 1; i<arr.length;i++){
        min = i;
        for (let j = i+1; j<=arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        x = arr[min];
        arr[min] = arr[i];
        arr[i] = x
    }
    return arr;
}

let nums = [3, 2, 1];

console.log(sort(nums));