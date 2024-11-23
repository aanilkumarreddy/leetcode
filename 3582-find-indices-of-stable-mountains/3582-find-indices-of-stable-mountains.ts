function stableMountains(height: number[], threshold: number): number[] {
    

    let res=[];
    for(let i=1;i<height.length;i++){
        if(height[i-1] > threshold){
            res.push(i)
        }
    }
    return res;
};