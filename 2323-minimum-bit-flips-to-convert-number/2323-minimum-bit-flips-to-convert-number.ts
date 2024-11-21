function minBitFlips(start: number, goal: number): number {
    
    let res=0;

    let xor= start ^ goal;
    while(xor !=0)
    {
         res+= xor & 1;

         xor >>=1;
    }

    return res;
      


};