class Queue<T>{
    data:T[]=[];

    push=(item:T)=>this.data.push(item); // add new element at the end of the array

    pop=()=>this.data.shift(); // remove the first element from the array
}

let numberQueue= new Queue<number>();
numberQueue.push(10);
numberQueue.push(20);
numberQueue.push(30);
console.log(numberQueue);
console.log("Removed "+numberQueue.pop());
console.log(numberQueue);

let stringQueue= new Queue<string>();
stringQueue.push("Alex");
stringQueue.push("Bob");
stringQueue.push("catty");
console.log(stringQueue);
console.log("Removed "+stringQueue.pop());
console.log(stringQueue);