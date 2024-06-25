// let alpha = Math.floor(Math.random()*10)+1
// console.log(alpha);
// const amount = new Number(45.1234)
// console.log(Math.round(amount));


//******** Dates ************** 


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getDate());

// console.log(`${myDate.getDate()} and the time instance is just the most focused thing.`);


// function newspaceName(number1,number2){
//     if(number1 === number2){
//     return number1 + number2
//     }
//     else{
//         console.log("Data Types are different :");
//         return number1 + number2
//     }
// }
// console.log(newspaceName(2,3));

// function spaceBelow(superVariable){
//     return `${superVariable} is a supere Hero.`
// }
// console.log(spaceBelow("Batman"));

const user = {
    username: "ali",
    pic: 122
}

function passingobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.pic}`);
}