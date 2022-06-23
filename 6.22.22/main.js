/* Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

function sevenAte9(str) {
    let ansArr = str.split('');
    
    for (let i = ansArr.length - 2; i >= 1; i--){
      if (ansArr[i-1] === '7' && ansArr[i] === '9' && ansArr[i+1] === '7') {
        ansArr.splice(i, 1);
      }
    }
    return ansArr.join('');
  }
  
  