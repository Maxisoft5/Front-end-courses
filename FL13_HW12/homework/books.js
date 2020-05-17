const root = document.getElementById('root');
let ul = document.createElement('ul');
let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let inputArray = [];


root.append(div);
root.append(div2);

div.className = 'column';
div2.className = 'column';
div2.append(div3);
div3.className = 'inputs';

ul.type = 'none';
ul.innerHTML = '<ul></ul>';
div.append(ul);

class Book{
    constructor(book){
        this._bookname = book.bookname;
        this._author = book.author;
        this._imgUrl = book.imgUrl;
        this._plot = book.plot;
        this._id = book.id;
    }
    getName() {
        return this._bookname;
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

 const book1 = new Book({id:1, bookname: 'Black Swan', author: 'Nasim Taleb',
 imgUrl: 'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg', 
 plot: 'Phylosophy'});
 const book2 = new Book({id:2, bookname: 'Anti-fragility', author: 'Nasim Taleb',
 imgUrl: 'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg', 
 plot: 'Phylosophy'});
 const book3 = new Book({id:3, bookname: 'Clr via C#', author: 'Jeffry Rictcher',
 imgUrl: 'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg', 
 plot: 'Phylosophy'});

inputArray.push(book1);
inputArray.push(book2);
inputArray.push(book3);

inputArray.forEach(book => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = `<a class="bookName">${book._bookname}</a>`;
    li.append(a);
    a.onclick = function () {
        window.location.assign(`../homework/index.html?id=${book._id}#preview`);
        getPreview(book);
}
    ul.append(li);

    let editBtw = document.createElement('button');
    editBtw.className = 'editBtw';
    editBtw.title = 'Edit';
    editBtw.textContent = 'Edit';
    editBtw.id = '#edit';
    editBtw.onclick = function () {
             window.location.assign(`../homework/index.html?id=${book._id}#edit`);
             getEditForm(book);
    }

    let addBtw = document.createElement('button');
    addBtw.className = 'addDtwn';
    addBtw.textContent = 'Add';
    addBtw.onclick = function () {
             window.location.assign(`../homework/index.html?id=${book._id}#add`);
             getAddFrom(book);
    }

    li.append(editBtw);
    li.append(addBtw);
});
let inputname = document.createElement('input');
let inputauthor = document.createElement('input');
let inputimgUrl = document.createElement('input');
let inputPlot = document.createElement('input');
inputname.innerHTML = `<input class ="edit-form">BookName</input>`;
inputauthor.innerHTML = `<input class ="edit-form">BookName</input>`;
inputimgUrl.innerHTML = `<input class ="edit-form">BookName</input>`;
inputPlot.innerHTML = `<input class ="edit-form">BookName</input>`;
div3.append(inputname,inputauthor,inputimgUrl,inputPlot);


function getEditForm(book) {
            inputname.value = book._bookname;
            inputauthor.value = book._author;
            inputimgUrl.value = book._imgUrl;
            inputPlot.value = book._plot;
            book._bookname = inputname.value;
            book._author = inputauthor.value;
            book._imgUrl = inputimgUrl.value;
            book._plot = inputPlot.value;
    }

function getAddFrom(book) {
   
            inputname.value = book._bookname;
            inputauthor.value = book._author;
            inputimgUrl.value = book._imgUrl;
            inputPlot.value = book._plot;
            let book2 = new Book();
            book2._bookname = inputname.value;
            book2._author = inputauthor.value;
            book2._imgUrl = inputimgUrl.value;
            book2._plot = inputPlot.value;
            inputArray.push(book2);
}
function getPreview(book) {

  
    let nameP = document.createElement('p');
    let authorP = document.createElement('p');
    let imgBook = document.createElement('img');
    let plotBook = document.createElement('p');

    nameP.innerHTML = `<p>${book._bookname}</p>`;
    authorP.innerHTML = `<p>${book._author}</p>`;
    imgBook.innerHTML = `<img src = ${book._imgUrl}></img>`;
    plotBook.innerHTML = `<p>${book._plot}</p>`;

    div3.append(nameP,authorP,imgBook,plotBook);
}