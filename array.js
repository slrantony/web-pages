let numbers = [24,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
console.log(numbers.includes(16,4));

function checkEven(value){
    return value % 2 == 0; 
}


let InputArr = [21,22,23,24,25,26,27,28,29,30,31,32,32,34,35];
let InputElements = InputArr.slice();
console.log(InputElements);
let EvenElemnets = InputElements.filter(checkEven);
console.log(EvenElemnets);
function cubicValue(n){
    return n*n*n;
}
let evenArr = EvenElemnets.map(cubicValue);
console.log(`the cubic Value of: ${evenArr}`);
function sum(number1,number2){
    return number1+number2;
}
let sumArr =EvenElemnets.slice();
console.log(sumArr);
let Addition = EvenElemnets.reduce(sum);
console.log(`The Sum Value of: ${Addition}`);
function product(number1,number2){
    return number1*number2;
}
let proArr =EvenElemnets.slice();
console.log(proArr);
let output = EvenElemnets.reduce(product);
console.log(`The Product Value of: ${output}`);