//console.log("Hello World");
//Output for var: 3 3 3
// for(var i = 0 ;i < 3; i++) {
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// for(let i = 0 ;i < 3; i++) {
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// for(var i = 0 ;i < 3; i++) {
//         console.log(i);
// }
// console.log(i);
// const fun = function(a, b){
//     return a + b;
// }
// let a = 5;
// console.log(a * 2);
// console.log(fun(10, 20));
//console.log(a(10, 20)); error
//console.log(fun ** 2); NaN
// console.log("12" + 12, '"12" + 12');
// console.log("12"-12);
// console.log("ab" - 12);
//"+" unary is the simplest way for the explicit
//console.log(`+"12" + 12 = ${+"12" + 12}`);
console.log("a"+"a"*"s"+"a"+"s");
//////////////////////////////
let a = 8;
let b = 4;
const mult = function(a,b){
    return a*b;
}
const div = function(a,b){
    return a/b;
}
const add = function(a,b){
    return a+b;
}
const sub = function(a,b){
    return a-b;
}
function calculate(num1,num2,operation){
    return operation(num1,num2)
}
console.log(calculate(a,b,mult));
/////////////////////////////////
function fun(num) {
    if (num == 5) {
            return function (a, b) {
                    return a + b;
            }
    } else {
            return function (a, b) {
                    return a - b
            }
    }
}
console.log(fun(5)(10, 3));