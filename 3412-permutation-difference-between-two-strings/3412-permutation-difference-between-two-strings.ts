function findPermutationDifference(s: string, t: string): number {
    
    let res=0;
   const bArr=t.split('');
     for (let i = 0; i < s.length; i++) {
        res= res+ Math.abs(i-bArr.findIndex(ele=>ele===s.charAt(i)))
     }
     return res;
};