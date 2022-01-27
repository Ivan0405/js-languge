const person1 = {id: 123, name:'Moshe', addres: {sity: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name:'Moshe', addres: {sity: 'Lod', street: 'Sokolov'}};
const person3 = person1;
console.log(`"123" == 123 is ${"123" == 123}`);
console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`person1 === person3 is ${person1 == person3}`);
console.log(`person1 === person2 is ${person1 === person2}`);
console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === 
        JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(person1.toString());
console.log(`name of person1 is ${person1.name}`);
console.log(`person1 livs in city ${person1.addres.sity}`);
Object.keys(person1).forEach(k => console.log(k));//array of object keys
Object.values(person1).forEach(v => console.log(v))//array of the object values
Object.entries(person1).forEach(e=>console.log(e));//array of arrays - [key,value]
console.log(Object.entries(person1));
function createAddres(city, street){
    // {city: city, street: street} <=> {city, street}
    return {city, street}
}
function createPerson(id, name, addres){
    return {id, name, addres}
}
const persons = [
    createPerson(123,"Vasya",createAddres("Rehovot","Parshani")),
    createPerson(124,"Olya",createAddres("Rehovot","Pr. Plaut")),
    createPerson(125,"Tolya",createAddres("Tel-Aviv","Dizingoff")),
]
console.log(persons);
