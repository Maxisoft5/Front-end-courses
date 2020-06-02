const users = {
	User: 'UserPass',
	Admin: 'RootPass'
}
let login;
let pass;
do{
	login = prompt('Enter your login: ', '');
	if(!login){
		alert('Canceled.');
	} else if(login.length < 4){
		alert("I don't know any users having name length less than 4 symbols");
	} else if(!users.hasOwnProperty(login)){
		alert('I don’t know you');
	} else{
		do{
			pass = prompt('Enter your password: ', '');
			if(users[login] !== pass){
				alert('Wrong password!');
			} else if(!pass){
				alert('Canceled.');
			} else{
				let curHours = new Date().getHours();
				if(curHours >=8 && curHours < 20){
					alert(`Good day, dear ${login}!`);
				} else{
					alert(`Good evening, dear ${login}`);
				}
			}
		}
		while(users[login] !== pass)
	}
}
while(!users.hasOwnProperty(login))
