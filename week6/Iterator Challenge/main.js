// Create an object which implements the iterable protocol 
// so that when we iterate over the element with a for of loop it will print only the even numbers.
// The object should contain 10 random numbers, you can initials them hard coded at first.

let evenIterator = [11,13,14,66,67,69,234,456,2,1];

evenIterator[Symbol.iterator] = function() {
  let i = 0;
  const self = this;
  return {
    next: function() {
      while ((i < self.length) && (self[i] % 2 !== 0)){
        i++;
      }
      if (i === self.length) {
        return {done: true};
      } else {
        return {done:false, value:self[i++]};
      }
    }
  }
}

for (let n of evenIterator) {
  console.log(n);
}
