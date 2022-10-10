function restdemo(...nums:number[]):number{

    let sum:number=0;
    for(let n of nums){
        sum= sum+n;
    }

    return sum;
}

console.log("Addition: "+ restdemo(1,2,3,4,5,6,7));
console.log("Addition: "+ restdemo(1,2));
console.log("Addition: "+ restdemo(10,20,30,40,50,60,70,80,90,100));