const ar1 = [3, 15 ,-19 ,4 ,22 ,17 ,1 ,2];
let str = '';
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
    }
}
myForEach(ar1,n => str += '#' + n);
console.log(str);
/////////////////////////////////////////////
// function mapper2(n) {
//     return n + 10;
// }
// function myMap(array, callback) {
//     const res = [];
//     function forEachCall(n, i, a) {
//             res.push(callback(n, i, a));
//     }
//     myForEach(array, forEachCall);
//     return res;
// }
// const ar2 = myMap(ar1,mapper2);
// console.log(ar2);
/*********************************cw14 */
const ar20 = [13,17,20,23,2,40];
// const arEvenOdd = ar20.filter((n, i, a) => a.length % 2 == 0 ?
// n % 2 == 0 : n % 2 == 1);
// console.log(arEvenOdd);
/*********************************** */
let res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res)
const max = ar20.reduce((max, cur)=>cur > max ? cur : max, ar20[0]);
console.log(max);
console.log(res);
// reduce with no second argument
res = ar20.reduce((res, cur) => res + cur);
/******************************************HW 14 definition task1 */
//TODO write myReduce(array, callback, initialResult) based on myForEach
//callback - function with four  possible parameters: accumulated result,
// current element, current index, reference to array
// if the user call doesn't contain initialResult, then the first element of the array will be
//considered as initial result (in that case iterating begins from the second element of the array)
/********************************************************************* */
function myFilter(array, callbackPredicate) {
    const res = [];
    function forEachCallback(n, i, a) {
            if (callbackPredicate(n, i, a)) {
                    res.push(n);
            }
    }
    myForEach(array, forEachCallback);
    // function forEachCallback(n, i, a) {
    //         if (callbackPredicate(n, i, a)) {
    //                 res.push(n);
    //         }
    // }
    myForEach(array, (n, i, a) => callbackPredicate(n, i, a) && res.push(n) );
    return res;
}
const ar20 = [13, 17, 20, 23, 2, 40,50];
const arEvenOdd = myFilter(ar20,(n, _i, a) => a.length % 2 == 0 ?
 n % 2 == 0 : n % 2 == 1);
console.log(arEvenOdd);
function myReduce(array, callbackReduce, initial) {
        
        if (initial === undefined) {
                initial = array[0];
                array = array.slice(1);
        }
        let res = initial;
        // function forEachCallack(n, i, a) {
        //          res = callbackReduce(res,n,i,a );       
        // }
        myForEach(array,(n, i, a) => res = callbackReduce(res, n, i, a));
        return res;
}
let res = myReduce(ar20, (res, cur) => res + cur, 0);
console.log(res)
let max = myReduce(ar20,(max, cur)=>cur > max ? cur : max, ar20[0]);
console.log(max);

// reduce with no second argument
res = myReduce(ar20,(res, cur) => res + cur);
max = myReduce(ar20,(max, cur)=>cur > max ? cur : max);
console.log(res);
console.log(max);
