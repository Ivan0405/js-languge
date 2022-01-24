const arHw = [13, 28, 4, 15, 25, -10, 17, 27];
const comparator = (a,b) => {
    let res = a%2 - b%2;
    if(res == 0){
        res = a%2 == 0 ? a-b : b-a;
    }
    return res;
}
arHw.sort(comparator);
console.log(arHw);

/************************ */
function matrixTransp(matrix) {
    const res = [];

    for (let i = 0; i < matrix[0].length; i++) {
            res.push([]);
            for (let j = 0; j < matrix.length; j++) {
                    res[i].push(matrix[j][i]);
            }
    }
    return res;
}
displayMatrix(matrixTransp([[1,2], [3,4], [5,6]]));
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
            let row = '';
            for (let j = 0; j < matrix[i].length; j++) {
                    row = row + matrix[i][j] + '   '
            }
            console.log(row);
    }  
}