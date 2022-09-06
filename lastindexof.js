 function lastIndexOf(array, index) {
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] === index) {
      return i;
    }
  } if (array !== index) {
    return - 1;
  }
}



/*

function lastIndexOf(array, index) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (index === array[i]) {
      console.log(array[i])
      return i;
    }
  }
}
*/




console.log(lastIndexOf([ 5, 9, 2, 3, 5 ], 5), "=?", 4);

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

