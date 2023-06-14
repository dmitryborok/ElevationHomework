const lettersContainer = document.getElementById("letters-container"); 
for(let i = 0; i < 8; i++){
    lettersContainer.innerHTML += `<div class="letter">${String.fromCharCode(i+97)}</div>`;
  }
  
const digitsContainer = document.getElementById("digits-container"); 
for(let i = 8; i > 0; i--){
    digitsContainer.innerHTML += `<div class="digit">${i}</div>`;
}
    
const cellsContainer = document.getElementById("cells-container"); 
for (let j=0; j < 4; j++) {
    for(let i = 0; i < 4; i++){
        cellsContainer.innerHTML += `<div class="white-cell"></div>`;
        cellsContainer.innerHTML += `<div class="black-cell"></div>`;
    }
    for(let i = 0; i < 4; i++){
        cellsContainer.innerHTML += `<div class="black-cell"></div>`;
        cellsContainer.innerHTML += `<div class="white-cell"></div>`;
    }
}