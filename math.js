const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}

// -------------------------
// round
const number = 3.4444;
const number2 = 3.5999;
const fullNumber2 = Math.round(number2);
const fullNumber = Math.round(number);
// console.log(fullNumber);
// console.log(fullNumber2);

// ceil & floor
const result2 = Math.ceil(3.00001);
// console.log(result2);
const result3 = Math.floor(456.259);
// console.log(result3);

// random 

// console.log(Math.random());
const random = Math.random()*100;
console.log(random);



