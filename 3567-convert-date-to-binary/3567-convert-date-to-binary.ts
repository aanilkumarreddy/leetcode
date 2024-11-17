function convertDateToBinary(date: string): string {
    
    let res=[];
    let arr= date.split('-');
    for(let i=0;i<arr.length;i++){
        res.push((+arr[i]).toString(2));
    }
    return res.join('-')

};