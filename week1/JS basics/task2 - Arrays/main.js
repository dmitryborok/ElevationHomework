
const numbers = [1,2,3,4,5,6,7,8,9,10]

// Now follow these instructions:
// delete the second and third elements
// change the fourth element to 1
// delete the last 4 elements
// add another element 0 to the beginning of the array
// print the modified array
// Your result should be:
// [0,1,4,5,1]

numbers.splice(1, 2);
numbers[3] = 1;
numbers.splice(-4, 4);
numbers.splice(0, 0, 0);
var s="[" + numbers[0];
for (let i=1; i<numbers.length; i++) s+=", "+numbers[i];
s+="]";
console.log(s);
