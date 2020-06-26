  'use strick';
  let x = true;
  label1: while (x){

    let checkNumber = prompt('Enter a number of check','');
  
    if(isNaN(checkNumber) || checkNumber < 0 || checkNumber === '' || checkNumber === ' ' ){
       alert('invalid input data');
       continue label1;
    }
    if(checkNumber === null){
      continue label1;
    }
  
    label2: while (x){
  
    let tipPercentage = prompt('Enter a tip percentage of check','');
  
    if(isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100 
    || tipPercentage === '' || tipPercentage === ' '){
      alert('invalid input data');
      continue label2;
     
    }
    if(checkNumber === null){
      continue label2;
    }else{
  
    let tipAmount = 0;
    let totalSum = 0;
    checkNumber = Number(checkNumber);
    tipPercentage = Number(tipPercentage);
    tipAmount = checkNumber * (tipPercentage * 0.01);
    tipAmount = Number(tipAmount.toFixed(2));
    totalSum = tipAmount + checkNumber;

    alert(` Check number: ${checkNumber} \n Tip: ${tipPercentage}
 Tip amount: ${tipAmount} \n Total sum to pay: ${totalSum}`);
     break label1;
    }
  }
  }