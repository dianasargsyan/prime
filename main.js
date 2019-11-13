const reader = require('readline-sync');
const util = require('./utils');

const number1 = reader.questionInt("Please insert a positive number = ");
const number2 = reader.questionInt("Please insert a positive number = ");

function primesOfRange(a, b) {
  if(a > 0 && b > 0){
    let primeNums = [];

    for(let i = a; i <= b; i++){
      if(util.isPrime(i)){
        primeNums.push(i)
      }
    }
    if(primeNums.length){
      return primeNums;
    }else{
      return "there are no prime numbers";
    }
  }else{
    return "both numbers should be positive";
  }
}

let result = primesOfRange(number1,number2);
util.printArrayElements(result);