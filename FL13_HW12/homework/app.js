const root = document.getElementById('root');
root.style.display = 'flex';
let storage = window.localStorage;
let bookList = JSON.parse(storage.books);
let curBook;
function leftSideSection(){
	let section = document.createElement('section');
	section.id = 'left_section';
	section.classList.add('left-section');
	section.classList.add('flex-column');
	root.append(section);
	booksList(bookList);
}
function rightSideSection(){
	let section = document.createElement('section');
	section.classList.add('flex-column');
	section.classList.add('right-section');
	root.append(section);
}
function requiredFormFields(form){
	for(let input of form[0].children){
		if(input.tagName === 'INPUT' && !input.value){
			alert('All fields are required!!!');
			return false;
		}
	}
	return true;
}
function rememberArticle(e){
	if(e.target.closest('.books-list')){
		curBook = e.target.closest('.books-list');
	}
	return curBook;
}
function booksList(list){
	document.querySelector('.left-section').innerHTML = '';
	list.forEach((item,index) => {
		let article = document.createElement('article');
		article.classList.add('flex-column');
		article.classList.add('books-list');
		article.id = index+1;
		let prevLink = document.createElement('a');
		prevLink.href = '#preview';
		prevLink.classList.add('preview');
		let img = document.createElement('img');
		img.src = item.img;
		prevLink.append(img);
		let title = document.createElement('h2');
		title.innerHTML = item.title;
		prevLink.append(title);
		let author = document.createElement('h3');
		author.innerHTML = item.author;
		prevLink.append(author);
		let plot = document.createElement('p');
		plot.innerHTML = item.plot;
		prevLink.append(plot);
		article.append(prevLink);
		let btn_edit = document.createElement('a');
		btn_edit.classList.add('btn');
		btn_edit.classList.add('btn-edit');
		btn_edit.href = '#edit';
		btn_edit.innerHTML = 'Edit';
		article.append(btn_edit);
		document.querySelector('.left-section').append(article);
		prevLink.addEventListener('click', showPreview);
		btn_edit.addEventListener('click', fillEditField);
	});
	let btn_add = document.createElement('a');
	btn_add.classList.add('btn');
	btn_add.id = 'btn_add';
	btn_add.innerHTML = '+Add';
	btn_add.href = '#add';
	document.querySelector('.left-section').append(btn_add);
	document.getElementById('btn_add').onclick = createForm;	
}
function showPreview(e){
	document.querySelector('.right-section').innerHTML = '';
	const rawData = rememberArticle(e).firstChild.cloneNode(true);
	const id = rememberArticle(e).id;
	history.pushState({page: 'preview'}, 'title preview', `?id=${id}`);
	document.querySelector('.right-section').prepend(rawData);
}
function showAlert(){
	let alert = document.createElement('div');
	alert.innerHTML = 'Book successfully updated';
	alert.classList.add('success');
	document.body.prepend(alert);
}
function hideAlert(alert){
	alert.style.display = 'none';
}
function createForm(){
	document.querySelector('.right-section').innerHTML = '';
	const id = bookList.length+1;
	history.pushState({page: 'add'}, 'title add', `?id=${id}`);
	let form = document.createElement('form');
	form.classList.add('flex-column');
	const	LENGTH =4;
	for(let i =0; i<LENGTH; i++){
		let label = document.createElement('label');
		form.append(label);
		let input = document.createElement('input');
		form.append(input);
	}
	let index = 0;
	const INTERVAL =2;
	form.children[index].innerHTML = 'pictures URL';
	index+=INTERVAL;
	form.children[index].innerHTML = 'title';
	index+=INTERVAL;
	form.children[index].innerHTML = 'author';
	index+=INTERVAL;
	form.children[index].innerHTML = 'plot';

	let cancel_btn = document.createElement('a');
	cancel_btn.classList.add('btn');
	cancel_btn.id = 'cancel_btn';
	cancel_btn.innerHTML = 'Cancel';	
	let save_btn = document.createElement('a');
	save_btn.classList.add('btn');
	save_btn.innerHTML = 'Save';
	save_btn.id = 'save_btn';	
	save_btn.dataset.state = 'add';
	document.querySelector('.right-section').append(form);
	document.querySelector('.right-section').append(cancel_btn);
	document.querySelector('.right-section').append(save_btn);
	document.getElementById('cancel_btn').onclick = cancelChanges;
	document.getElementById('save_btn').onclick = saveChanges;
	return form;
}
function fillEditField(e){
	let form = createForm();
	const id = rememberArticle(e).id;
	history.replaceState({page: 'edit'}, 'title edit', `?id=${id}`);
	let ind =0;
	const rawData = rememberArticle(e).firstChild;
	let btn_save = document.querySelector('.right-section').lastChild;
	btn_save.dataset.state = 'edit';
	for(let i = 1; i<form.children.length; i+=2){
		if(rawData.children[ind].tagName === 'IMG'){
			form.children[i].value = rawData.children[ind].src;
		} else{
			form.children[i].value = rawData.children[ind].innerHTML;
		}
		ind++;
	}
}
function cancelChanges(){
	let choose = confirm('Discard changes?');
	if(choose){
		document.querySelector('.right-section').innerHTML = '';
		let href = location.origin+location.pathname;
		location.href = href;
	}
}
function saveChanges(e){
	const form = document.getElementsByTagName('form');
	if(!requiredFormFields(form)){
		return;
	}
	const btn = document.getElementById('save_btn');
	let article;
	if(!rememberArticle(e)){
		const LETTERS = 4;
		article = location.search.slice(LETTERS);
	} else{
		article = rememberArticle(e).id;
	}
	let bookId;
	let bookItem;
	let index;
	if(btn.dataset.state === 'add'){
		bookId = bookList.length+1;
		index = bookList.length;
	} else{
		const START= 300;
		const END = 3000;
		setTimeout(() => showAlert(), START);
		setTimeout(() => hideAlert(document.querySelector('.success')), END);
		bookId = article;
		index = bookId - 1;
	}
	bookItem = {
		id: bookId,
		img: form[0].children[1].value,
		title: form[0].children[3].value,
		author: form[0].children[5].value,
		plot: form[0].children[7].value
	}
	bookList[index] = bookItem;
	booksList(bookList);
	storage.books = JSON.stringify(bookList);
	curBook = document.getElementById(bookId);
	location.href = curBook.firstChild.href;
	history.pushState({page: 'preview'}, 'title preview', ``);
}
function checkId(){
	let bookId = location.search.slice(4);
	if(bookId > bookList.length || bookId<=0){
		return;
	}
	return true;
}
function checkHash(){
	const LETTERS = 4;
	let bookId = location.search.slice(LETTERS);
	let href = location.origin+location.pathname;
	if(location.hash === '#preview' && checkId()){
			showStatePreview(bookId);
	} else if(location.hash === '#edit' && checkId()){
			fillStateEditField(bookId);
	} else if(location.hash === '#add'){
			createForm();
			let newHref = location.href + '#add';
			history.replaceState('{page:save}', 'save', newHref);
	} else if(href!==location.href){
		location.href = href;
	}
}
leftSideSection();
rightSideSection();
document.querySelector('.left-section').onclick = rememberArticle;

window.onload = function(e){
	checkHash(e);
}
window.addEventListener('popstate', function(e){
	if(e.type === 'load'){
		return false;
	}
	checkHash(e);
});
function fillStateEditField(bookId){
	let form = createForm();
	history.replaceState({page: 'edit'}, 'title edit', `?id=${bookId}#edit`);
	let btn_save = document.querySelector('.right-section').lastChild;
	if(btn_save){
		btn_save.dataset.state = 'edit';
	}
	let ind =0;
	const rawData = document.getElementById(bookId).firstChild;
	const INTERVAL = 2;
	for(let i = 1; i<form.children.length; i+=INTERVAL){
		if(rawData.children[ind].tagName === 'IMG'){
			form.children[i].value = rawData.children[ind].src;
		} else{
			form.children[i].value = rawData.children[ind].innerHTML;
		}
		ind++;
	}
}
function showStatePreview(bookId){
	history.pushState({page: 'preview'}, 'title preview', `?id=${bookId}#preview`);
	document.querySelector('.right-section').innerHTML = '';
	let btn_save = document.querySelector('.right-section').lastChild;
	if(btn_save){
		btn_save.dataset.state = 'edit';
	}
	const rawData = document.getElementById(bookId).firstChild.cloneNode(true);
	document.querySelector('.right-section').prepend(rawData);
}
