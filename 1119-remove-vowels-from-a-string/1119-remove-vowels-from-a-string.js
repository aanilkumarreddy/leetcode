/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let res="";
      let vowels = "aeiouAEIOU";
    for(let i=0;i<s.length;i++){
        if(vowels.indexOf(s[i]) == -1){
            res=res+s[i]
        }
    }
    return res;
};