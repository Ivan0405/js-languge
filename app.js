/***************************Strings */
// const str1="abc";
// const str2 = "abc";
// console.log(`str1 == str2 is ${str1 == str2}`)
// console.log(`abc < "ab" is ${str1 < "ab"}`)
// console.log(`"123" > 23 is ${"123" > 23}`);
// console.log(`"123" > "23" is ${"123" > "23"}`);
/***************************************** */
//if logical expretion contains both and number, JS will convert string to number
//
// console.log(`"abc" > "23" is ${"123" > 23}`);
// console.log(`"abc" < "23" is ${"abc" < 23}`);
// console.log(`"abc" != 23 is ${"abc" != 23}`)
// console.log(`"abc" != 23 is ${!("abc" == 23)}`)
/***************************************** */
// function stringProcessing(str) {
//     const strP = "" + str;
//    console.log(`"${str}"[4] is ${str[4]}`);
//    console.log(`length of "${str}" is ${strP.length}`);
//    console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`);
//    console.log(`substring of "${str}" beginning from index 2 to index 5 is ${strP.substring(2, 5)}`);
//    console.log(`index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; last index of substring "ll" in the "${str}" is  ${strP.lastIndexOf("ll")}`)

// }
//stringProcessing("abcd lmn ll oo tt");
/********************************HW 11 definition */
// function encode(num, base) {
//             //base from 2 to 10
//             let res="";
//             do {
//                     const digit = Math.trunc(num % base);
//                     const symb = getSymbol(digit);
//                     res = symb + res;
//                     num = Math.trunc(num / base);
    
//             } while(num >= 1);
//             return res;
//     }
//     function getSymbol(digit) {
//           //base from 2 to 10 
//           console.log(digit);
//           return "" + digit; //it will work only for base <= 10 
//     }
//     console.log(encode(10, 2))
// write function 
function encode (num, codingString) {
    //codingString - any string with no repeated symbols
    // you should validate codingString doesn't contain repeated symbols
    //base = length of codingString
    // algorithm the same as specified above
    // getSymbol(digit, codingString) using operator []
    let flRepeated = false;
    for(let i = 0; i<codingString.lastIndexOf; i++){
        if(codingString.lastIndexOf(codingString[i]) !=i){
            console.log(`coding string has repeated symbol ${codingString[i]}`)
            flRepeated = true;
        }
        if(!flRepeated){
            let res ="";
            const base = codingString.length;
            do{
                const digit = Math.trunc(num % base);
                const digitSymb = codingString[digit];
                res = digitSymb + res;
                num = Math.trunc(num / base);
            }while(num !=0);
            return res;
        }
    } 
}
console.log(`encode(5, '.-') = ${encode(5, '.-')}`);
console.log(`encode(5, '..-') = ${encode(5, '..-')}`);
console.log(`encode(555, '&*()%$#@!+') = ${encode(555, '&*()%$#@!+')}`);