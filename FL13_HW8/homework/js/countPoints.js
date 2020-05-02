console.log(countPoints('3:1','3:3','4:3','1:2'));
function countPoints(){
  let points = 0;
  for(let i = 0; i < arguments.length; i++){
  let firstScore = String(arguments[i]).charAt(0);
  let secondScore = String(arguments[i]).charAt(2);
    if(firstScore > secondScore){
    points += 3;
    }else if(firstScore === secondScore){
    points += 1;
    }
  }
   return points;
}