// MORE THAN ONE ARGUMENTS:
// Creates a new array with the arguments as items.
// The length of the array is set to the number of arguments.

var array1 = new Array(1, 2, 3);

console.log(array1); // [1, 2, 3]
console.log(array1.length); // 3


// ONLY ONE(NUMBER) ARGUMENT:
// Creates an array with length set to the number.
// The number must be a positive integer otherwise an error will be thrown.
// Note that the array has no property keys apart from length.

var array2 = new Array(3);

console.log(array2); // Array(3) {length: 3}
console.log(array2.length); // 3


// ONLY ONE(NON-NUMBER) ARGUMENT:
// Creates a new array with the argument as the only item.
// The length of the array is set to 1.

var array3 = new Array("3");

console.log(array3); // ["3"]
console.log(array3.length); // 1


// =========Objects=========


let person = { 
    name:"Nur", 
    isHeAMale:"true"

}

console.log = person ("name");
console.log = person ("isHeAMale");



