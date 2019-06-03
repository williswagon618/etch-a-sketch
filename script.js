const container = document.querySelector('#container');
const button = document.querySelector('button');
button.addEventListener('click', resetButton);

buildGrid();

function buildGrid() {
  howGrid = prompt('What size grid would you like? (Max recommended = 128)');
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
  addColor();
}

function addColor() {
  const rowDiv = document.querySelectorAll('.rowClass');
  rowDiv.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      div.classList.add('color');
    });
  });
}

function resetButton() {
  const rowDiv = document.querySelectorAll('.rowClass');
  rowDiv.forEach((div) => {
    div.classList.remove('color', 'rowClass');
    div.remove();
  });
  const colDiv = document.querySelectorAll('.colClass');
  colDiv.forEach((div) => {
    div.classList.remove('colClass');
    div.remove();
  })
  buildGrid();
}


