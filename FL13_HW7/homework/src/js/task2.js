// Your code goes here
let account = 0;
let nextGame;
let possiblePrize = 0;
let attempt = 3;
let Prize1 = 100;
let Prize2 = 50;
let Prize3 = 25;
let multiplier = 6;

if(confirm('Do you want to play a game?')){

     while (attempt){
        let randomNumber = Math.floor(Math.random() * Math.floor(multiplier));

        if(attempt === 3){
            possiblePrize = Prize1;
        } else if(attempt === 2){
            possiblePrize = Prize2;
        } else if(attempt === 1){
            possiblePrize = Prize3;
        }

    let userNumber = prompt(` Choose a roulette pocket from ${multiplier-6} to ${multiplier-1} 
 Attempts left: ${attempt}\n Total prize: ${account}$\n Possible prize on current attempt: ${possiblePrize}$`,'');

console.log('usernum: ' + userNumber);
console.log('randomnum: ' + randomNumber);

    if(Number(userNumber) === randomNumber && attempt === 1 && userNumber !== null){
         if(confirm(`Congratulation, you won!   Your prize is: ${account += possiblePrize}$
         \nDo you want to continue?`,'')){
                attempt = 3;
                multiplier = 11;
                Prize1 += 100;
                Prize2 += 50;
                Prize3 += 25;
                continue;
         } else {
            break;
        }
    } else if (Number(userNumber) === randomNumber && attempt === 2 && userNumber !== null){
         if(confirm(`Congratulation, you won!   Your prize is: ${account += possiblePrize}$
         \nDo you want to continue?`,'')){
                attempt = 3;
                multiplier = 11;
                Prize1 += 100;
                Prize2 += 50;
                Prize3 += 25;
                continue;
         } else {
            break;
        }
    } else if (Number(userNumber) === randomNumber && attempt === 3 && userNumber !== null){
         if(confirm(`Congratulation, you won!   Your prize is: ${account += possiblePrize}$
         \nDo you want to continue?`,'')){
                attempt = 3;
                multiplier = 11;
                Prize1 += 100;
                Prize2 += 50;
                Prize3 += 25;
                continue;
        } else {
             break;
        }
    } else if(Number(userNumber) !== randomNumber && attempt === 1){
        if(confirm(`Thank you for your participation. Your prize is: ${account}$
        \nDo you want to play again?`)){
            multiplier = 6;
            if(possiblePrize > 25 && attempt === 1){
            Prize1 -= 100;
            Prize2 -= 50;
            Prize3 -= 25;
            }
            attempt = 3;
            continue;
        } else {
            break;
        }
    } else if (Number(userNumber) !== randomNumber){
        attempt--;
        continue;
    }
    }
    } else {
    alert('You did not become a billionaire, but can');
}