function convert(...array){
	for(let i=0; i<array.length; i++){
		if(typeof array[i] === 'string'){
			array[i] = parseInt(array[i]);
		}else{
			array[i] = '' + array[i];
		}
	}
	return array;
}
function executeforEach(array, callback){
	for(let i=0; i< array.length; i++){
		callback(array[i], i);
	}
}
function mapArray(array, callback){
	executeforEach(array, (item, index) => {
		array[index] = callback(item);
	});
	return console.log(array);
}
function filterArray(array, callback){
	let filteredArr = [];
	executeforEach(array, (item) => {
		if(callback(item)){
			filteredArr.push(item);
		}
	});
	return console.log(filteredArr);
}
function containsValue(array, number){
	let contains = false;
	executeforEach(array, (item, index) => {
		if(array[index] === number){
			contains = true;
		}
	});
	return console.log(contains);
}
function flipOver(string){
	let reverseStr = '';
	executeforEach(string, (item,index) => {
		reverseStr += string[string.length - index -1];
	});
	return console.log(reverseStr);
}
function makeListFromRange(range){
	if(range[0]>range[1]){
		const TEMP = range[0];
		range[0] = range[1];
		range[1] = TEMP;
	}
	const LENGTH = range[1] - range[0] + 1;
	let mas = [];
	for(let i=0; i<LENGTH; i++){
		mas[i] = range[0] + i;
	}
	return console.log(mas);
}	
function getArrayOfKeys(obj, key){
	let arrOfKeys = [];
	executeforEach(obj, (item) => {
		arrOfKeys.push(item[key]);
	});
	console.log(arrOfKeys);
}
function substitute(arr){
	const range = [10,20];
	mapArray(arr, (item) => {
		if(item<range[1] && item>range[0]){
			item = '*';	
		}
		return item;
	});
	return arr;
}
function getPastDay(date, daysAgo){
	const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-daysAgo);
	const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
	});
	return console.log(formatter.format(newDate));
}
function formatDate(date){
	let dd = date.getDate();
	const TEN = 10;
	if (dd < TEN) {
		dd = '0' + dd;
	}
	let mm = date.getMonth() + 1;
	if (mm < TEN) {
		mm = '0' + mm;
	}
	let yy = date.getFullYear();
	if (yy < TEN) {
		yy = '0' + yy;
	}
	let hh = date.getHours();
	if (hh < TEN) {
		hh = '0' + hh;
	} 
	let min = date.getMinutes();
	if (min < TEN) {
		min = '0' + min;
	} 
	return console.log(yy + '/' + mm + '/' + dd + ' ' + hh + ':' + min);
}
