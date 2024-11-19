function findPermutationDifference(s: string, t: string): number {
    
    let res=0;
     for (let i = 0; i < s.length; i++) {
        res= res+ Math.abs(i-t.indexOf(s.charAt(i)))
     }
     return res;
};