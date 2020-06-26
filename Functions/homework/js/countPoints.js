function isBigger(a,b){
	return a > b;
}
function countPoints(matchesRezults){
	let sum=0
	matchesRezults.forEach(function(point, game){
		if(point[0]>=0 && point[0]<=4 && point[2]>=0 && point[2]<=4 && game<10){
			if(isBigger(point[0],point[2])){
				sum+=3;
			} else if(point[0]===point[2]){
				sum+=1;
			}
		}
	});
	return sum;
}
console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));
