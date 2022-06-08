// Crie uma função que recebe um array de dois numeros e coloque os numeros em ordem crescente. Nao utilize o método sort

function acertaArray(arr){
    let maior = 0;
    for (let i in arr){
        if (arr[0] > arr[1]){
            maior = arr[0];
            arr[0] = arr[1];
            arr[1] =  maior
        }
    }
    return arr;
}

let num = [5, 3];

console.log(acertaArray(num));