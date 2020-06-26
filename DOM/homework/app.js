const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');
// TODO: your code goes here

function createTree(array, obj) {
  array.append(createTreeDom(obj));
}
function createTreeDom(obj) {

  let ul = document.createElement('ul');

  for (let el of obj) {
    let li = document.createElement('li');
    if(el.folder){
      li.dataset.type = 'folder';
      li.dataset.isOpen = 'false';
      li.innerHTML = '<span class="material-icons folder">folder</span>'+ ' ' + el.title;
    }else{
      li.dataset.type = 'file';
      li.innerHTML ='<span class="material-icons file">insert_drive_file</span>' + ' ' + el.title;
    }
    if(el.children === null){
      li.dataset.children = 'false';
    }
    if(obj[obj.indexOf(el)].children){
    let childrenUl = createTreeDom(obj[obj.indexOf(el)].children);
    li.append(childrenUl);
    } 
    ul.append(li);
  }

  return ul;
}
createTree(rootNode, data);

function showChildren(e){
  const target = e.target;
  if(target.lastChild.tagName !== 'UL') {
    if(target.dataset.children === 'false'){
      const ul = document.createElement('ul');
      let li = document.createElement('li');
      li.innerHTML = 'Folder is empty';
      target.append(ul);
      ul.append(li);
    }else {
      return;
    }
  }
  if(target.dataset.type === 'folder'){
    target.firstChild.innerHTML = '<span class="material-icons folder">folder_open</span>';
  }

  target.lastChild.style.display = 'block';
  target.dataset.isOpen = 'true';
}
function hideChilren(e){
  const target = e.target;

  if (target.dataset.type !== 'folder') {
    return;
  }

  target.firstChild.innerHTML = '<span class="material-icons folder">folder</span>';
  target.lastChild.style.display = 'none';
  target.dataset.isOpen = 'false';
}

function toogleFolder(e) {
  contextMenuClose();

  if (e.target.dataset.isOpen === 'true') {
    return hideChilren(e);
  }

  if (e.target.dataset.isOpen === 'false') {
    return showChildren(e);
  }
}

let curItem;
function openContextMenu (e) {
  e.preventDefault();
  contextMenuClose();

  if (e.target.dataset.type === 'folder' || e.target.dataset.type === 'file'){
    createContextMenu(e);
  }
}

function createContextMenu(e) {
  curItem = e.target;
  curItem.style.backgroundColor = 'lightblue';
  const pageX = e.clientX + 17;
  const pageY = e.clientY - 20;
  let ul = document.createElement('ul');
  ul.classList.add('context-menu');
  ul.id = 'contextMenu';
  let liEdit = document.createElement('li');
  liEdit.id = 'liEdit';
  liEdit.innerHTML = 'Rename';
  let liDelete = document.createElement('li');
  liDelete.id = 'liDelete';
  liDelete.innerHTML = 'Delete item';
  ul.style.left = pageX + 'px';
  ul.style.top = pageY + 'px';
  ul.append(liEdit);
  ul.append(liDelete);
  document.body.append(ul);
  liDelete.onclick = deleteItem;
  liEdit.onclick = editItem;
}

function deleteItem(e) {
  if(curItem.parentNode.children.length === 1){
    curItem.innerHTML = 'Folder is empty';
  }else{
    curItem.parentNode.removeChild(curItem);
  }
  contextMenuClose(e);
}

function editItem() {
  const title = curItem.childNodes[1];
  const text = title.textContent;

  curItem.removeChild(title);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', text);
  input.style.display = 'inline-block';
  input.onblur = (e) => {
    const newText = document.createTextNode(e.target.value)
    curItem.removeChild(e.target)
    curItem.childNodes[0].parentNode.insertBefore(newText, curItem.childNodes[0].nextSibling);
  };
  curItem.childNodes[0].parentNode.insertBefore(input, curItem.childNodes[0].nextSibling);
  input.focus();
  input.setSelectionRange(0, text.split('.')[0].length);
  contextMenuClose();
}

function contextMenuClose() {
  const menu = document.getElementById('contextMenu');
  if (menu) {
    menu.outerHTML = '';
  }
}
rootNode.onmouseover = function(e){
  if(e.target.tagName !== 'LI') {
    return;
  }
  e.target.style.backgroundColor = 'lightblue';
}
rootNode.onmouseout = function(e){
  e.target.style.backgroundColor = 'white';
}
rootNode.onclick = toogleFolder;
rootNode.oncontextmenu = openContextMenu;

