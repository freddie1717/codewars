/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word){
    let result = word.toLowerCase().split("");
    let count = 0;

    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < word.length; j++) {
            if(result[i] === word[j].toLowerCase()) {
                count++;
            }
        
        }
        if (count >= 2){
            result[i] = ")";
        }
        else if (count === 1){
            result[i] = "(";
        }
      count = 0;
    }
    return result.join('');


}

