let interval = {
	min:0,
	max:5
};
let attempt= 1;
let sum = 0;
let posPrice;
let choise = confirm('Do you want to play a game?');
if(choise){
	play();
} else{
	alert("'You did not become a billionaire, but can.");
}
function play(){
	let ballLanded = Math.floor(Math.random() * (interval.max - interval.min + 1)) + interval.min;
	for(let i=3; i>0; i--){
		if(i===3){
			posPrice = 100*attempt;
		} else{
			posPrice = 25*i*attempt;
		}
		let exeptedLanded = prompt(`Enter the number the ball will be landed from ${interval.min} to ${interval.max}\n 
			attempts left: ${i} \n
			total prize: ${sum}\n
			possible price on current attempt ${posPrice} \n
			current range ${attempt}`, '');
		if(exeptedLanded === ballLanded.toString()){
			switch (i){
				case 3:
				sum+=posPrice;
				break;
				case 2:
				sum+=posPrice;
				break;
				case 1:
				sum+=posPrice;
				break;
				default: break;
			}
			choise = confirm(`Congratulation, you won! Your prize is: ${sum} $. Do you want to continue?`);
			if(choise){
				attempt++;
				interval.max+=5;
				play();
			} else{
				alert(`Thank you for your participation. Your prize is: ${sum} $`);
				choise = confirm('Do you want to play a game again?');
				if(choise){
					sum=0;
					attempt=1;
					interval.min = 0;
					interval.max = 5;
					play();
				} else{
					break;
				}
			}
		} else if(i!==1){
			alert('try again');
		} else if(i===1){
			alert(`Thank you for your participation. Your prize is: ${sum} $`);
			choise = confirm('Do you want to play a game again?');
			if(choise){
				sum=0;
				attempt=1;
				interval.min = 0;
				interval.max = 5;
				play();
			} else{
				alert("'You did not become a billionaire, but can.");
			}
		}
	}
}

