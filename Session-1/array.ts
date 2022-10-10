//array we can store same kind of data
//array index always start from 0

const nums : number[]=[10,20,30,40,50];
console.log("Numbers Array: "+nums);

//const names: string[]=["apple","ball","cat"]
const names:string[]= new Array<string>('apple','ball','cat','dog');
//String values you can give either in double or ,single quote.
console.log("String array: "+names)
console.log("First Element: "+nums[0]+" "+names[0])
console.log(`2nd Element ${names[1]}`);
console.log(`3nd Element ${nums[2]}`);
//tuple

let student:[number,string]=[102,'sonam soni'];
console.log("Student Details")
console.log("Student Id: "+student[0]);
console.log("Student Name: "+student[1]);
//change values
student[0]=302;
student[1]="Sachin tendulkar";
console.log("Student Details")
console.log("Student Id: "+student[0]);
console.log("Student Name: "+student[1]);