function isBigger(a,b){
	return a > b;
}
function getDifference(a,b){
	if(isBigger(a,b)){
		return a-b;
	} else{
		return b-a;
	}
}
console.log(`getDifference 5 4 : ${getDifference(5,4)} \n
	getDifference 4 5 : ${getDifference(4,5)} \n
	getDifference 5 5 : ${getDifference(5,5)} `);