// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

const splice = function(arr, start, deleteCount, item1, /* item2, itemN */){
    if (!arr) return []; //
    if (arguments.length == 1) return []; // if only array specified with no other params

    let bNoDelete = false;
    let result = [];
    if (start >= arr.length) {
        bNoDelete = true;
    } else if (start < -arr.length) {
        start = 0;
    } else if (start < 0) {
        start += arr.length; // if negative, counting from the end of array
    }

    if (arguments.length == 2) { // delete all from start, no inserts
        let initialArrLength = arr.length; 
        for (let i = start; i < initialArrLength; i++) {
            result.push(arr[i]);
        }
        for (let i = start; i < initialArrLength; i++) {
            arr.pop();
        }
        return result; 
    }

    let insertCount = arguments.length - 3
    if (insertCount > 0) {
        for (let i=0; i < insertCount; i++) {
            arr.push(undefined);
        } // extend the array by insertCount elements
        for (let i=arr.length - 1; i >= start + deleteCount + insertCount; i--) {
            arr[i] = arr[i - insertCount];
        } // right-shift values from the middle of the array to the new elements
        for (let i = start + deleteCount; i < start + deleteCount + insertCount; i++) {
            arr[i] = arguments[i - start - deleteCount + 3];
        }
    }

    if (deleteCount && !bNoDelete) {
        for (let i = start; i < arr.length - deleteCount; i++) {
            result.push(arr[i]);
            arr[i] = arr[i+deleteCount];
        } // left-shift values from the middle of the array to the place of the elements to be deleted;
          // fill the result array 
        for (let i = 0; i < deleteCount; i++) {
            arr.pop();
        } // delete the redundant elements at end of the array, now they duplicate the values in the main part of the array 
    }
    return result;

     
}



// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 
