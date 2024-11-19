function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {

   let res=0; 

    for(let i=0;i<hours.length;i++){
        if(hours[i]>= target){
            res+=1
        }
    }
    return res;

};