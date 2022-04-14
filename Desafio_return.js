//Fragmento de código 1 
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*
VARIABLES               DATOS
 .                       hello,dojo              
*/
//Fragmento de código 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
VARIABLES               DATOS
.                       hello
result                  15
*/
//Fragmento de código 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
VARIABLES               DATOS
num                     3
result                  18
*/
//Fragmento de código 4: hay un giro
var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*
VARIABLES               DATOS
num                     15
result                  15,10,10,15
*/
//Fragmento de código 5
var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*
VARIABLES               DATOS
num                     15
result                  15,10,20,15
*/
//Fragmento de código 6
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
VARIABLES               DATOS
num                     3,5
result                  16
*/
//Fragmento de código 7
function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*
VARIABLES               DATOS
num                     5,8
result                  
*/
//Fragmento de código 8
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
/*
VARIABLES               DATOS
num                     2,5,3,8
result           
*/
//Fragmento de código 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
VARIABLES               DATOS
sum                     5,8
result                  13
*/
//Fragmento de Código 10: un desafío arduo así que tómalo con calma
 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
VARIABLES               DATOS
sum                     5,3,6,3,5,8
result                  19
*/