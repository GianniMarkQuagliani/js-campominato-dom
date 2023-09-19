// Variabili globali
const container = document.querySelector('.container');
let gameIsOver = false;
let bombPositions = [];

// Funzione per inizializzare il gioco
function initializeGame() {
    container.innerHTML = '';
    gameIsOver = false;
    bombPositions = [];
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
    const numBombs = 16;
    bombPositions = generateBombs(numBombs, gridSize);

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = createSquare(i, squareSize);
        square.addEventListener('click', squareClickHandler);
        container.append(square);
    }
}

// Funzione per generare posizioni casuali per le bombe
function generateBombs(numBombs, gridSize) {
    const bombPositions = new Set();

    while (bombPositions.size < numBombs) {
        const randomPosition = Math.floor(Math.random() * gridSize * gridSize) + 1;
        bombPositions.add(randomPosition);
    }

    return Array.from(bombPositions);
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
    if (gameIsOver) {
        return;
    }

    const squareNumber = parseInt(this.querySelector('span').innerText);

    if (bombPositions.includes(squareNumber)) {
        // Mostra tutte le bombe
        bombPositions.forEach(bombNumber => {
            const bombSquares = container.querySelectorAll('.square');
            bombSquares.forEach(bombSquare => {
                const bombSquareNumber = parseInt(bombSquare.querySelector('span').innerText);
                if (bombSquareNumber === bombNumber) {
                    bombSquare.style.backgroundColor = 'red';
                }
            });
        });

        this.style.backgroundColor = 'red';
        console.log('Hai perso! Game Over');
        alert('Hai perso! Game Over');
        gameIsOver = true;
    } else {
        this.classList.toggle('clicked');
        this.style.backgroundColor = 'blue';
    }
}

// Aggiunta dell'event listener al pulsante "Genera"
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', initializeGame);

// Inizializzazione del gioco all'avvio
initializeGame();