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
function mapper2(n) {
    return n + 10;
}
function myMap(array, callback) {
    const res = [];
    function forEachCall(n, i, a) {
            res.push(callback(n, i, a));
    }
    myForEach(array, forEachCall);
    return res;
}
const ar2 = myMap(ar1,mapper2);
console.log(ar2);