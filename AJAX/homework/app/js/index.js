const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
const title = document.createElement('h1');
title.innerHTML = 'Manage User App';
appContainer.prepend(title);
const nameInput = document.createElement('input');
nameInput.placeholder = 'Name';
nameInput.id = 'userName';
appContainer.append(nameInput);
const surname = document.createElement('input');
surname.placeholder = 'Full Name';
surname.id = 'userSurname';
appContainer.append(surname);
const addUser = document.createElement('button');
addUser.innerHTML = 'Add New User';
addUser.id = 'addUser';
addUser.onclick = addNewUser;
appContainer.append(addUser);
const table = document.createElement('div');
table.classList.add('table');
table.innerHTML = 'Loading...';
appContainer.append(table);
updateUserList();


function sendRequest(method, url, body=null){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = 'json';
		if (xhr.setRequestHeader('Authorization', 'admin')) {
			method === 'delte'
		} else {
			xhr.setRequestHeader('Content-Type', 'application/json');
		}

		xhr.onload = () => {
			const ERR_CODE = 400;
			if(xhr.status>=ERR_CODE){
				reject(xhr.response);
			} else{
				resolve(xhr.response);
			}
		}
		xhr.onerror = () => {
			reject(xhr.response);
		}
		xhr.send(JSON.stringify(body));
	});
}
function updateUserList(){
	sendRequest('GET', `${baseUrl}/users`)
		.then((data) => {
			table.innerHTML = '';
			data.forEach((user) => {
				const row = document.createElement('div');
				const idField = document.createElement('div');
				idField.classList.add('label');
				idField.innerHTML = user.id;
				row.append(idField);
				const nameField = document.createElement('input');
				nameField.value = user.name;
				row.append(nameField);
				const userName = document.createElement('input');
				userName.value = user.username;
				row.append(userName);
				const btnUpdate = document.createElement('button');
				btnUpdate.innerHTML = 'Update';
				btnUpdate.classList.add('update');
				row.append(btnUpdate);
				const btnDelete = document.createElement('button');
				btnDelete.innerHTML = 'Delete';
				btnDelete.classList.add('delete');
				row.append(btnDelete);
				table.append(row);
				document.querySelectorAll('button').forEach((btn) => {
					btn.disabled = '';
				});
				for(let btn of document.querySelectorAll('.delete')){
					btn.addEventListener('click', deleteItem);
				}
				for(let btn of document.querySelectorAll('.update')){
					btn.addEventListener('click', updateItem);
				}
			});
		}
	)
}
function addNewUser(cb){
	if(!document.getElementById('userName').value ||
			!document.getElementById('userSurname').value){
		alert('Please, fill all the fields before add');
	return false;
	}
	table.innerHTML = 'Loading...';
	cb.target.disabled= 'disabled';
	sendRequest('POST', `${baseUrl}/users`,{
		'name': document.getElementById('userName').value,
		'username': document.getElementById('userSurname').value});
	document.getElementById('userName').value = '';
	document.getElementById('userSurname').value = '';
	updateUserList();
}
function deleteItem(cb){
	cb.target.disabled = 'disabled';
	const id = e.target.parentNode.firstChild.innerHTML;
	sendRequest('DELETE', `${baseUrl}/users/${id}`);
	updateUserList();
}
function updateItem(cb){
	cb.target.disabled = 'disabled';
	const id = e.target.parentNode.firstChild.innerHTML;
	const second = 2;
	const body = {
		'name': e.target.parentNode.children[1].value,
    'username': e.target.parentNode.children[second].value
	}
	sendRequest('PUT', `${baseUrl}/users/${id}`, body);
	updateUserList();
}
