function scope():void{

    if(true){
        let n1:number=10;
        const n2:number=20;
        var n3:number=30;
    }

    console.log("Var: "+n3);
   // console.log("Const and Let: "+n1+" "+n2)
}
scope();