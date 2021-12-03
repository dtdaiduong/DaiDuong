// let size = 4 //Number(prompt(`Enter do dai ma tran vuong:`));
// let matrix = [];
// let min = 10;
// let max = 90;
// let show = '';
// let sumeven = 0;
// let sumMainDiagonal = 0;
// let sumAuxiliaryDiagonal = 0;
// let sumBorderLine = 0;
// let sumBorderLineTop = 0;
// let sumBorderLineBot = 0;
// let sumBorderLineLeftRight = 0;
// for (let i = 0; i < size; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < size; j++) {
//         matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
//         // show += `${matrix[i][j]}\t`;
//     }
// }
// console.log(matrix);

// for (let j = 0; j < size; j++) {
//     sumBorderLineTop += matrix[0][j]
// }
// for (let j = 0; j < size; j++) {
//     sumBorderLineBot += matrix[test][j]
// }
// for (i = 1; i < size - 1; i++) {
//     for (j = 0; j < size; j = j + zise - 1) {
//         sumBorderLineLeftRight += matrix[i][j]
//     }
// }


// console.log(sumBorderLineTop);
// console.log(sumBorderLineBot);


let min = 20;
let max = 60;
let size1 = 5;
let size2 = 6;
let matrix = [];
for (let i = 0; i < size1; i++) {
    matrix[i] = [];
    for (let j = 0; j < size2; j++) {
        matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(matrix);
let findMatrix = [];
for (i = 0; i < size1; i++) {
    findMatrix[i] = [...matrix[i]]; //clone ma trận
}
let v = 40;
for (i = 0; i < size1; i++) {
    for (j = 0; j < size2; j++) {
        if (findMatrix[i][j] != v) {
            findMatrix[i][j] = '';
        }
    }
}
console.log(findMatrix);
let boiCua5Matrix = [];
for (i = 0; i < size1; i++) {
    boiCua5Matrix[i] = [...matrix[i]];
}
for (i = 0; i < size1; i++) {
    for (j = 0; j < size2; j++) {
        if (boiCua5Matrix[i][j] % 5 != 0) {
            boiCua5Matrix[i][j] = '';
        }
    }
}
console.log(boiCua5Matrix);
let matrixReverse = [];
for (let j = 0; j < size2; j++) {
    matrixReverse[j] = [];
    for (let i = 0; i < size1; i++) {
        matrixReverse[j][i] = matrix[i][j];
    }
}
console.log(matrixReverse);


