// Variabili globali
const container = document.querySelector('.container');

// Funzione per inizializzare il gioco
function initializeGame() {
    container.innerHTML = '';
    createGrid();
}

// Funzione per creare la griglia
function createGrid() {
    const difficultySelect = document.getElementById('difficulty');
    const selectedDifficulty = parseInt(difficultySelect.value);
    let gridSize;

    if (selectedDifficulty === 1) {
        gridSize = 10;
    } else if (selectedDifficulty === 2) {
        gridSize = 9;
    } else if (selectedDifficulty === 3) {
        gridSize = 7;
    }

    const squareSize = 100 / gridSize;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = createSquare(i, squareSize);
        square.addEventListener('click', squareClickHandler);
        container.append(square);
    }
}

// Funzione per creare un quadrato
function createSquare(index, size) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = size + '%';
    square.innerHTML = `<span>${index}</span>`;
    return square;
}

// Funzione per gestire il clic su un quadrato
function squareClickHandler() {
    const squareNumber = parseInt(this.querySelector('span').innerText);
}

// Aggiunta dell'event listener al pulsante "Genera"
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', initializeGame);