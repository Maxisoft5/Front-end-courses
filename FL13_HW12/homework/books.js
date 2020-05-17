const root = document.getElementById('root');
let ul = document.createElement('ul');
let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');

class Book{
    constructor(id,bookname,author,imgUrl,plot){
        this._bookname = bookname;
        this._author = author;
        this._imgUrl = imgUrl;
        this._plot = plot;
        this._id = id;
    }
    get bookname(){
        return this._bookname;
    }
    set bookname(value) {
        this._bookname = value;
    }
    get author(){
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get imgUrl(){
        return this._imgUrl;
    }
    set imgUrl(value) {
        this._imgUrl = value;
    }
    get plot(){
        return this._plot;
    }
    set plot(value) {
        this._plot = value;
    }
    get id(){
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}

let inputArray = [];
let book1 = new Book(1,'BookName1','Author1',
'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg','Adventure');
let book2 = new Book(2,'BookName2','Author2',
'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg','Adventure');
let book3 = new Book(3,'BookName3','Author3',
'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg','Adventure');
let book4 = new Book(4,'BookName4','Author4',
'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg','Adventure');

inputArray.push(book1);
inputArray.push(book2);
inputArray.push(book3);
inputArray.push(book4);

root.append(div);
root.append(div2);
div.className = 'column';
div2.className = 'column';
div2.append(div3);
div3.className = 'inputs';

ul.type = 'none';
ul.innerHTML = '<ul></ul>';
div.append(ul);

for(let l = 1; l < inputArray.length+1; l++){
    let li = document.createElement('li');
    let editBtw = document.createElement('button');
    editBtw.id = '#edit';
    editBtw.onclick = function () {
             window.location.assign(`../homework/index.html?id=${l}#edit`);
             getEditForm(l);
    }
    let addBtw = document.createElement('button');
    addBtw.onclick = function () {
             window.location.assign(`../homework/index.html?id=${l}#add`);
             getAddFrom(l);
    }
    li.innerHTML = `<a class="material-icons folder" href = '../homework/index.html?id=${l}#preview'>BookName</a>`;
            ul.append(li);
    editBtw.title = 'Edit';
    editBtw.textContent = 'Edit';
    addBtw.textContent = 'Add';
    li.append(editBtw);
    li.append(addBtw);
}
function getEditForm(id) {
        let book1 = new Book(1,'BookName1','Author1',
        'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg','Adventure');
         book1 = inputArray.filter(book => book.id === id);
        let bookname = document.createElement('input');
        let author = document.createElement('input');
        let imgUrl = document.createElement('input');
        let plot = document.createElement('input');
        bookname.innerHTML = `<input class ="edit-form">BookName</input>`;
        author.innerHTML = `<input class ="edit-form">BookName</input>`;
        imgUrl.innerHTML = `<input class ="edit-form">BookName</input>`;
        plot.innerHTML = `<input class ="edit-form">BookName</input>`;
        bookname.value = book1.bookname;
        author.value = book1.author;
        imgUrl.value = book1.imgUrl;
        plot.value = book1.plot;
        div3.append(bookname,author,imgUrl,plot);
}
function getAddFrom(id) {
        let book2 = new Book(1,'BookName1','Author1',
        'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg','Adventure');
        book2 = inputArray.filter(book => book.id === id);
        let bookname = document.createElement('input');
        let author = document.createElement('input');
        let imgUrl = document.createElement('input');
        let plot = document.createElement('input');
        bookname.innerHTML = `<input class ="edit-form">BookName</input>`;
        author.innerHTML = `<input class ="edit-form">BookName</input>`;
        imgUrl.innerHTML = `<input class ="edit-form">BookName</input>`;
        plot.innerHTML = `<input class ="edit-form">BookName</input>`;
        bookname.value = book2.bookname;
        author.value = book2.author;
        imgUrl.value = book2.imgUrl;
        plot.value = book2. plot;
        div3.append(bookname,author,imgUrl,plot);
}