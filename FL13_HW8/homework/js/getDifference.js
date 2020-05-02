function getDifference(firstNum, secondNum){
  let result;
  if(secondNum > firstNum){
      result = secondNum - firstNum;
    }else{
      result = firstNum - secondNum;
    }
    return result;
}
console.log(getDifference(-3, -14));