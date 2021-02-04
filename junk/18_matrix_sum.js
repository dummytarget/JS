const sumMatrix = (matrixA, matrixB) => {

    let sum = [];
        for (let j = 0; j < matrixA.length; j++) {
            var temp = [];
            for (let i = 0; i < matrixA[j].length; i++) {
                
                temp.push(matrixA[j][i]+matrixB[j][i])

            }
            sum.push(temp);
        }

    return sum;
}

let matrixA = [[1,2,1],[3,4,2]];
let matrixB = [[1,2,5],[3,4,4]];

console.log(sumMatrix(matrixA, matrixB));