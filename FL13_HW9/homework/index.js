function convert(){
    let convertedArray = [];
    for(let arg = 0; arg < arguments.length; arg++){
    if(arguments[arg] === String(arguments[arg])){
       convertedArray.push(Number(arguments[arg]));
    } else if (arguments[arg] === Number(arguments[arg])){
        convertedArray.push(String(arguments[arg]));
       }
    }
    return convertedArray;
}
function executeforEach(args = [], multiplies){
    for(let arg = 0; arg < args.length; arg++){
    args[arg] = multiplies(args[arg]);
    }
        return args;
    }
function mapArray(args = [], addition){
    for(let arg = 0; arg < args.length; arg++){
        if(args[arg] === String(args[arg])){
            args[arg] -=0;
            args[arg] = addition(args[arg]);
        }else{
            args[arg] = addition(args[arg]);
            }
    }
        return args;
    }
function filterArray(args = [], even){
    let filtredArray = [];
    even = function name(el){
    return el % 2 === 0
    };
    for(let arg = 0; arg < args.length; arg++){
        if(even(arg) === true){
            filtredArray.push(args[arg]);
        }
    }
        return filtredArray;
    }
function containsValue(args = [], value){
    for(let arg = 0; arg < args.length; arg++){
        if(args[arg] === value){
            return true;
        }else{
            return false;
        }
    }
}
function flipOver(string){
    string = String(string);
    let newString = '';
    for(let char = string.length - 1; char >= 0; char--){
        newString += string[char];
        }
    return newString;
}
function makeListFromRange(numbersRange = []){
    let secondNum = numbersRange[1];
    let newArray = [];

    for( let firstNum = numbersRange[0]; firstNum <= secondNum; firstNum++ ){
        newArray.push(firstNum);
    }
    return newArray;
}
function getArrayOfKeys(array = [],keyName){
    let keysArray = [];
    for(let key = 0; key < array.length; key++){
        keysArray.push(array[key][keyName]);
    }
    return keysArray;
}
function substitute(array =[]){
    for(let number = 0; number < array.length; number++){
        if(array[number] < 20 && array[number] > 10){
            array[number] = '*';
        }
    }    
    return array;
}
function getPastDay(inputDate, day){
    let date = new Date(inputDate);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    let options = {
        year: 'numeric',
        months: 'long',
        day: 'numeric',
        timezone: 'UTC'
      };
      date.setDate(date.getDate() - day);
    let result = `${date.getDate()},(${date.getDate()} ${monthNames[date.getMonth(date.toLocaleString('en-US',options))]} ${date.getFullYear()})`;
    return result;
}
function formatDate(date){
    const dateFormat = 10;
   let days = date.getDate();
   let months = date.getMonth() + 1;
   let years = date.getFullYear();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   if(days < dateFormat) {
      days = '0' + days;
    }
   if(months < dateFormat) {
      months = '0' + months;
    }
   if(years < dateFormat) {
      years = '0' + years;
    }
   if(hours < dateFormat) {
      hours = '0' + hours;
    }
   if(minutes < dateFormat) {
      minutes = '0' + minutes;
   }
   return years + '/' + months + '/' + days + ' ' + hours + ':' + minutes;
}