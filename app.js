/***********************forEach */
// const items =['item1','item2','item3'];
// const copy = [];

// // for(let i = 0;i< items.length;i++){
// //     copy.push('New'+ items[i]);
// // }

// items.forEach(function(elem,index,array){
//     copy.push(index + 'New' + elem)
// });

// console.log(copy);
// /*********************filter */
// //let array = [12, 5, 8, 130, 44];
// let isBigEnough = (elem) => elem > 15;

// let newArray = array.filter(isBigEnough)
// console.log(newArray);
// /******************map */
// let nums = [1, 4, 9, 12, 50];

// let multiplyBuTo = (elem) => elem * 2;

// let result = nums.map(multiplyBuTo)
// console.log(result);
/**********************reduse */
// const array = [1, 2, 3, 4, 5];

// let total = array.reduce(function(acc,elem){
//     console.log('Acc: ',acc, 'Current elem: ', elem);
//     return acc + elem;
// },10);
// console.log(total);
const array = ['apple','banana','peach','orange'];

let fruits = array.reduce((acc,elem) => {
    acc[elem] = 1;
    return acc;
},{})
console.log(fruits);