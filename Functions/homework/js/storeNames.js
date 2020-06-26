console.log(storeNames('apple','poatato','carrot'));
function storeNames(){
  let fruits = [];
  for(let i = 0; i < arguments.length; i++){
     fruits.push(arguments[i]);
    }
        return fruits;
}