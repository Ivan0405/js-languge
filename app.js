// function createAddress(city, street) {
//         //{city: city, street: street} <=> {city, street}
//         return {city, street}
// }
// function createPerson(id, name, address) {
//         return {id, name, address};
// }
// const persons = [
//         createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
//         createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
//         createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
//         createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
// ]
// //task3
// function getPersonsCity(persons, city) {
//         return persons.filter(p => p.address.city === city);
// }
// console.log(getPersonsCity(persons, 'Rehovot'));
// //task 4
// function movePersonsNoCityAtBeginning(persons, city) {
//         const personsRes = getPersonsCity(persons, city);
//         personsRes.unshift(...persons.filter(p => p.address.city !== city));
//         return personsRes;
// }
// console.log(movePersonsNoCityAtBeginning(persons,  'Rehovot')); 
/////////////////////////
//input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
//output: lmn -> 3
//        a -> 2
//        d -> 2
//        bc -> 1
function displayOccurrences(array) {
        //creating object with key - unique element of array (string as an element of array)
        //                     value - occurrences count
        //difference between  obj ={a: 123, d: "abc"}; const a = "d" ; obj.a === 123,
        // and obj[a] === "abc"
        //obj.c = 10 -> {a: 123, d: "abc", c: 10}
        const res = {};
        for (let i = 0; i < array.length; i++) {
                if (res[array[i]] === undefined) {
                        //string as content of array[i] occures first time
                        res[array[i]] = 1;
                } else {
                        res[array[i]] = res[array[i]] + 1;
                }
        }
        // console.log(res) -> intermediate debug log
        Object.entries(res).sort((e1, e2) => {
                const res = e2[1] - e1[1];
                return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
        }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))


}
const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);