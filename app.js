function Deferred() {
        this.functions = []
};
Deferred.prototype.then = function(thenFn) {
        this.functions.push(thenFn);
}
Deferred.prototype.resolve = function(res) {
        this.functions.forEach(fn => res = fn(res));

}
         const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');
/************************************************** */
function MyArray(initialValue) {
        this.value = initialValue; //common value
        this.array = []; //values at the indexes
}
MyArray.prototype.setValue = function(value) {
        this.value = value;
      this.array = [];
}
MyArray.prototype.set = function(index, value) {
        this.array[index] = value;
}
const ar = [1, 2, 4, 5, 100];
ar.filter(n => n % 2 !== 0).forEach(n => console.log(n));
MyArray.prototype.get = function(index) {
        return this.array[index] ?? this.value; // if this.array[index] either undefined or null returns this.value
}
const myArray = new MyArray(10);
console.log("should be 10",myArray.get(100)) // displayed out 10
myArray.set(100, 500)//sets 500 at index 100
console.log("should be 10",myArray.get(200)) //displayed out 10
console.log("should be 500",myArray.get(100)) //displayed out 500
myArray.setValue(300);
console.log("should be 300",myArray.get(100)) //displayed out 300
console.log("should be 300",myArray.get(200)) //displayed out 300
myArray.set(20, 0);
console.log("should be 0",myArray.get(20)) //displayed out 300
// how to get array's length
const arr1 = [];
arr1[100000000] = 10;
arr1.length = 0;
// console.log(`length of arr1 is ${arr1.length}`);
// arr1.length = 0;
// console.log(arr1[100000000]);
Array.prototype.toString = function() {
        return "[object, Object]"
}
const arr3 = [];