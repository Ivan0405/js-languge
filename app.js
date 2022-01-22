const ar = [2, 100, 9, 80];
// ar.sort(function(a, b){
//     return a -b;
// });
// ar.sort((a,b) => a-b);
// console.log(`ar is ${ar.toString()}`);
/********************HW #12 definition */
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
//expected [-10, 4, 28, 40, 27, 25, 17, 15, 13]
//task: write a comporator returns  <0 if first than second, >0
//if first gratad than second,==0 if eguls second
/**************************************** */
//adding elements/s at and of array
ar[ar.length] = 200;
console.log(ar);
ar.push(300,25);
console.log(ar);
const ar1 = [-8, 30,-57];
//ar.push(ar1); there will be added array not separated numbers
//if you want to add seprated numbers you should a spreadmoperator///
ar.push(...ar1);
console.log(ar);
// for adding elements at begining of an array there is method "unshift"
//everythings has been said about "push" will work for "unshift" only unlike "push" unshift method
//adds elemetns begining
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);
//abc123drtyu
//method splice for insorting or replacing any elements in any plase
//first argument - index for inserting or replacing
//second argument - number of the deleted elements (if 0 than splice will be appliedet)
//third argument designtes seguence of begin inserted elements like push/unshift
ar.splice(2,0,1,2);
console.log(ar);
//removing(deliting)
let el = ar.pop();//removes the last element and returns it
//el = -57; -57 will be removed from the array ar
el = ar.shift();//removes the first element and returns it
//el = 27;27 will be removed from the array ar
console.log(el. ar);
ar.splice(3, 5);//rempves 5 elements bedining from the one at index 3
console.log(ar);
//includes, insexOf
//two dimentionals arrays
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 4, 5],[3, 4, 5]];
const matrix2 = [[10, 20], [50, -5], [34, 28]]
function displayMatrix(matrix) {
     for (let i = 0; i < matrix.length; i++) {
             let row = '';
             for (let j = 0; j < matrix[i].length; j++) {
                     row = row + matrix[i][j] + '   '
             }
             console.log(row);
     }  
}
displayMatrix(matrix1);
displayMatrix(matrix2);
/************************************HW12 */
//write function
function matrixTransp(matrix) {
    //TODO
    //returns matrix with colums that are rows of sours matrix and
    //colums that are colums of sours matrix
    //example: sours matrix [[1,2],[3,4],[5.6]]
    //resoult matrix [[1,3,5],[2.4.6]]
}