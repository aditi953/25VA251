const student={
    name : "aditi",
    cgpa :8.2,
    marks : 400,
};
console.log(student);
let a=5;
let b=2;
console.log(a+b);
console.log(a*b);
let marks=50;
if(marks>=50){
    console.log("pass");
}
else{
    console.log("fail");
}
let num=prompt("enter a number");
if(num%5===0){
    console.log("yes");
}
else{
    console.log("no");
}
for(let i=0;i<5;i++){
    console.log("aditi");
}
let sum=0;
for(let i=0;i<5;i++){
sum=sum+i;
}
console.log(sum);
//for-of loop
let size=0;
let str="aditisingh";
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);
//for-in loop : used for array and object
let Student={
name:"aditi",
cgpa:8,
age:20,
isPass:true,

};
for(let i in Student){
    console.log(i,Student[i]);
}



