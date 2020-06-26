console.log(positiveSum(1,2,-3,-4,5));
function positiveSum(){
  let numbersArray = [];
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
       numbersArray.push(arguments[i]);
    }
  for(let i = 0; i < numbersArray.length; i++){
       if (numbersArray[i] > 0){
       sum += numbersArray[i]; 
    }
    }
    return sum;
}