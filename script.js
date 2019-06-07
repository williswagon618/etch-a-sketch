const container = document.querySelector('#container');
const mainframe = document.querySelector('body');

const button = document.querySelector('#reset');
button.addEventListener('click', resetButton);

const slid = document.querySelector('#slid');
slid.addEventListener('click', toggleColor);

let howGrid = 16;  //initalize 16x16 grid

function buildGrid() {
  let rowHeight = (100 / howGrid) + '%';
  for (let colNum = 1; colNum <= howGrid; colNum++) {
    let colDiv = document.createElement('div');
    colDiv[colNum] = colDiv;
    colDiv.classList.add('colClass');
    colDiv.setAttribute('id', `grid${colNum}`);
    container.appendChild(colDiv);
    
    for (let rowNum = 1; rowNum <= howGrid; rowNum++) {
      let rowDiv = document.createElement('div');
      rowDiv[rowNum] = rowDiv;
      rowDiv.classList.add('rowClass');
      rowDiv.setAttribute('id', `grid${rowNum}`);
      rowDiv.setAttribute('style', `height: ${rowHeight}`)
      //rowDiv.textContent = `Col ${colNum} Row ${rowNum}`;
      colDiv.appendChild(rowDiv);
    }
  }
  toggleColor();
}
function randomColor() {
  const rowDiv = document.querySelectorAll('.rowClass');
  rowDiv.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getRandomColor();
    });
  });
}
function addGray() {
  const rowDiv = document.querySelectorAll('.rowClass');
  rowDiv.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = '#2f4f4f';
    });
  });
}
function getRandomColor() {
  const options = '012345689ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * 15)];
  }
  return color;
}
function resetButton() {
  shake();
  setTimeout(() => {
  const rowDiv = document.querySelectorAll('.rowClass');
  rowDiv.forEach((div) => {
    div.classList.remove('color', 'rowClass');
    div.remove();
  });
  const colDiv = document.querySelectorAll('.colClass');
  colDiv.forEach((div) => {
    div.classList.remove('colClass');
    div.remove();
  });
    slid.checked = false;
    mainframe.classList.remove('animate');
    howGrid = prompt('What size grid would you like? (Max recommended = 128)');
    buildGrid();
  }, 1500);
}
function toggleColor() {
  if (slid.checked == false) addGray();
  if (slid.checked == true) randomColor();
}
function shake() {
  mainframe.classList.add('animate');
}

buildGrid();

