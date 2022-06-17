/*Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]*/

snail = function(array) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++){
            answer.push(array[i][j]);
        }
    }
    console.log(answer)
    return answer;
  }

  snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  