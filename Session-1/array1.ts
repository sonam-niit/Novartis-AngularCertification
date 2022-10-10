const nums1: number[]=[10,20,30,50,60];
for(let i of nums1){
    console.log(i)
}

//destructing my array in objects
const myArray:number[]=[11,45,78,54];
const [num1,num2,num3,num4]=myArray;

console.log("Values: ",num1,num2,num3,num4);

const data=[{name:'alex',age:23},{name:"Bob",age:45},{name:"catty",age:35}];
const [user1,user2,user3]=data;
console.log("User1: "+user1.name+" "+user1.age);
console.log("User2: "+user2.name+" "+user2.age);
console.log("User3: "+user3.name+" "+user3.age);