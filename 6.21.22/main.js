/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/


function moveZeros(arr) {
 
    for (let i = arr.length-1; i >= 0; i--){
      if (arr[i] === 0) {
        arr.splice(i, 1)
        arr.push(0);
      }
    }
  return arr;
}