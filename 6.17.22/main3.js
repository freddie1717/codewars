/* In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
*/

function solve(arr){
    //sort the original array
    arr.sort(function(a,b) {return a-b});
    //put a dummy value at the end so the loops will run correctly later
    arr.push('y');
    //this is the initial count of each number in the array
    let count = 1;
    //this will be the final answer
    let ansArr = [];
    //this is an in between array of objects to keep track of the number of instances of a number
    let helperArr = [];
    
    //a loop to count how many instances of a number there is in the array
    for(let i = 0; i < arr.length-1; i++) {
        //if there is another, count will increment
        if(arr[i] === arr[i+1]){
            count++;
        }
        else {
            //when there are no more, we will record the number and the times it was counted into the helper array
            helperArr.push({"number": arr[i], "times": count})
            //reset count to 1
            count = 1;
        }
    }
    //sort the helper array by how many times the number appears.
    helperArr.sort(function (a,b) {
        //these two if conditions will sort all of the numbers that have more than one instance and it will sort them in descending order (unless they have the same number of instances, then they will be caught by the else):
        /*
        > 0	sort a after b
        < 0	sort a before b
        */
        if (a.times < b.times) {
            return 1;
        }
        if (a.times > b.times) {
            return -1;
        }
        //this else condition will catch numbers that have the same number of instances and sort them by the number
        else {
            return a.number - b.number;
        }
    })

    //this loop will populate the answer array by going through the helper array of objects and pushing in the number for the number of times it occured
    for(let i = 0; i < helperArr.length; i++) {
        for (let j = 0; j < helperArr[i].times; j++){
            ansArr.push(helperArr[i].number);
        }
    }
    return ansArr;
  }