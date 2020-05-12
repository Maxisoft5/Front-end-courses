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



function createTree(container, obj) {
  container.append(createTreeText(obj));
}

function createTreeText(obj) { // отдельная рекурсивная функция
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

createTree(rootNode,data)

