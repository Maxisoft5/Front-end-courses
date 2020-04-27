// Your code goes here
let currentHours = new Date().getHours()
let login = prompt('Enter your login','');

if (login === null){ 
    alert('Canceled');
} else if (login.length < 4){ 
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === 'User' || login === 'Admin'){
    let password = prompt('Enter your passwrod','');
     
    if (login === 'User' && password === 'UserPass'){
        if (currentHours < 20 && currentHours >= 8){
       alert('Good day, dear User!');
        } else if (currentHours >= 20 || currentHours <8){
            alert('Good evening, dear User!')
        }
    } else if(login === 'Admin' && password === 'RootPass'){
        if(currentHours < 20 && currentHours > 4){
        alert('Good day, dear Admin!');
     } else if (currentHours >= 20 || currentHours <=3){
            alert('Good evening, dear Admin!')
        }
    } else {
        alert('Wrong Password');
    }
} else {
    alert("I don't know you");
}
