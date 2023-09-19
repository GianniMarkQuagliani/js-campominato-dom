// Seleziono il container e lo salvo in una variabile
const container = document.querySelector('.container');

// Faccio un reset
reset();
init();
function reset () {
    container.innerHTML = '' ;
}

// Creo un ciclo da 1 a 100.
function init() {
    // Modifico il ciclo per generare 100 quadrati
    for (let i = 1; i <= 100; i++) { 

        // Creo un nuovo elemento quadrato utilizzando la funzione createSquare(i)
        const square = createSquare(i);

        // Aggiungo un gestore di eventi 'click' all'elemento quadrato
        square.addEventListener('click', function () {
            // Quando il quadrato viene cliccato, eseguo le seguenti operazioni:
            
            // Aggiungo o rimuovo la classe 'clicked' per cambiare il suo stile
            this.classList.toggle('clicked');
            console.log(this.className);
            
            // Stampo il testo contenuto nell'elemento (numero del quadrato) nella console
            console.log(this.innerText);
        });

        // Aggiungo l'elemento quadrato al container
        container.append(square);

    }
}

   

function createSquare(index) {
    // Creo un nuovo elemento quadrato
    const newSquare = document.createElement('div');

    // Assegno la classe 'square' all'elemento quadrato
    newSquare.className = 'square';
    console.log(newSquare.className);

    // Inserisco il numero dell'indice all'interno dell'elemento quadrato
    newSquare.innerHTML = `<span>${index}</span>`;
    console.log(newSquare.innerHTML);

    // Restituisco l'elemento quadrato appena creato
    return newSquare;
}

//BONUS
// Seleziono la select e il pulsante "Genera"
const difficultySelect = document.getElementById("difficulty");
const generateButton = document.getElementById("generate");

// Aggiungo un event listener al pulsante "Genera"
generateButton.addEventListener("click", generateGrid);

// faccio il reset della griglia all'avvio
generateGrid();

function generateGrid() {
    // Ottengo il livello di difficoltà selezionato dalla select
    const selectedDifficulty = parseInt(difficultySelect.value);
    let gridSize;

    // Imposto la dimensione della griglia in base alla difficoltà
    if (selectedDifficulty === 1) {
        // Difficoltà 1: 100 caselle (10x10)
        gridSize = 10;
    } else if (selectedDifficulty === 2) {
        // Difficoltà 2: 81 caselle (9x9)
        gridSize = 9;
    } else if (selectedDifficulty === 3) {
        // Difficoltà 3: 49 caselle (7x7)
        gridSize = 7;
    }

    const numBombs = calculateNumBombs(selectedDifficulty); // Calcolo il numero di bombe in base alla difficoltà
    
    // Resetto la griglia prima di generarla nuovamente
    reset();

    // Calcolo la larghezza dei quadrati in base alla dimensione della griglia
    const squareSize = 100 / gridSize;

    const bombPositions = generateBombs(numBombs, gridSize); // Ottengo la posizione delle bombe

    // Genera la griglia in base alla dimensione calcolata
    for (let i = 1; i <= gridSize * gridSize; i++) { 
        const square = createSquare(i);

        // Imposto la larghezza dei quadrati
        square.style.width = `${squareSize}%`;

        if (bombPositions.includes(i)) {
            square.classList.add('bomb'); // Aggiungo la classe 'bomb' ai quadrati con le bombe
        }

        square.addEventListener('click', function () {
            this.classList.toggle('clicked');
            console.log(this.className);
            console.log(this.innerText);
        });
        container.append(square);
    }
}


// Questa funzione genera una lista di posizioni casuali per le bombe all'interno di una griglia.
// - numBombs: il numero di bombe da generare.
// - gridSize: la dimensione della griglia (griglia quadrata gridSize x gridSize).
function generateBombs(numBombs, gridSize) {
    bombPositions = [];

    // Continuo a generare posizioni casuali finché il numero di bombe generato non raggiunge numBombs.
    while (bombPositions.length < numBombs) {
        // Genera una posizione casuale all'interno della griglia.
        const randomPosition = Math.floor(Math.random() * gridSize * gridSize) + 1;

        // Verifico se la posizione casuale è già stata scelta e, in caso contrario, lo aggiungo alla lista delle posizioni delle bombe.
        if (!bombPositions.includes(randomPosition)) {
            bombPositions.push(randomPosition);
        }
    }
    
    // Restituisco la lista delle posizioni delle bombe.
    return bombPositions;
}

// Calcolo il numero di bombe in base al livello di difficoltà selezionato.
// - difficulty: il livello di difficoltà scelto dall'utente (1, 2 o 3).
function calculateNumBombs(difficulty) {
    switch (difficulty) {
        case 1:
            // 20 bombe per il livello di difficoltà 1.
            return 20;
        case 2:
            // 15 bombe per il livello di difficoltà 2.
            return 15;
        case 3:
            // 10 bombe per il livello di difficoltà 3.
            return 10;
        default:
            // Valore predefinito: 20 bombe se il livello di difficoltà non è valido.
            return 20; // Valore predefinito
    }
}
