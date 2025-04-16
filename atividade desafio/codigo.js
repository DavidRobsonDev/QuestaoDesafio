function encontrarMaior(matriz){
    let maior = [0][0];

    for(let i = 0; j < matriz.length; j++){
        for(let j = 0; j < matriz[i].length; j++){
        if (matriz[i][j] > maior) {
             maior = matriz[i][j];
          }
       }
    }
    return maior;
}

let matrizNumeros = [
    [1, 5, 9],
    [2, 8, 3],
    [7, 6, 4]
]
console.log("Maior valor: " + encontrarMaior(matrizNumeros))