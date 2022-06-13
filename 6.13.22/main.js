/* Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above. 


*/

function partsSums(ls) {
    //declare destination array
    let parts_sums = [];

    //until original array is empty, run reduce and push sum to new array, then remove first item of original array
  if (ls.length === 0) { 
    parts_sums.push(0);
    return parts_sums;
  }
  
    while(ls.length > 0) {
        parts_sums.push(ls.reduce((total, amount) => total + amount));
        ls.shift();
    }
  
    parts_sums.push(0);
  
    return parts_sums;
}