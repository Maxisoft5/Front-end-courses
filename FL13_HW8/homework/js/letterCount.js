console.log(letterCount('worDD','d'));
function letterCount(inputString, inputLetter){
  let count = 0;
  let outputString = String(inputString);
  let outputLetter = String(inputLetter);
  for(let i = 0; i < outputString.length; i++ ){
  if(outputString.charAt(i) === outputLetter || outputString.charAt(i) === outputLetter.toUpperCase()){
        count++;
    } 
  }
   return count;
}