 'use strick';
  let x = true;
  while (x) {
  let inputWord = prompt('Enter a word', '');

  inputWord = inputWord.replace(/\s/g, '');
   
  console.log(inputWord);
  
  if ( inputWord === '' || inputWord === ' ') {
          alert('invalid value');
   }
  if(inputWord.length % 2 === 0 && 
  inputWord !== '' && inputWord !== ' ') {
  alert(`${inputWord[inputWord.length / 2 - 1]}${inputWord[inputWord.length / 2]}`);
  break;
  } if(inputWord.length % 2 !== 0 && 
  inputWord !== '' && inputWord !== ' ') {
  alert(`${inputWord[inputWord.length / 2 - 0.5]}`);
  break;
  }
}
