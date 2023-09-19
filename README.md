# Griglia Campo Minato
- Creo un file HTML con un container chiamato main-wrapper che contiene un container, con all'interno i quadrati (square)
- Lo stilizzo, creando un file CSS e le vari classi
- Poi inizio a fare javascript

- Seleziono il container e lo salvo in una variabile
- Faccio un reset
- Creo un ciclo da 1 a 100.
- Ad ogni iterazione del ciclo, genero un quadrato utilizzando una funzione.

- Creo un nuovo elemento quadrato
- Assegno la classe 'square' all'elemento quadrato
- Inserisco il numero dell'indice all'interno dell'elemento quadrato
- Restituisco l'elemento quadrato appena creato

# Bonus
- Creo variabili globali per il container principale, lo stato del gioco e la lista delle posizioni delle bombe
- Definisco una funzione `initializeGame()` per inizializzare il gioco quando viene cliccato il pulsante "Genera":
- resetto il contenuto del container, reimposto `gameIsOver` su `false` e svuoto `bombPositions`.
- Chiamo la funzione `createGrid()` per generare la griglia
- Definisco una funzione `createGrid()` per creare la griglia in base alla difficoltà selezionata:
  - Ottengo la difficoltà selezionata dall'utente utilizzando l'elemento `<select>` con id "difficulty".
  - In base alla difficoltà, imposto la variabile `gridSize` per rappresentare le dimensioni della griglia.
  - Calcolo `squareSize` per la larghezza dei quadrati in base alle dimensioni della griglia.
  - Chiamo la funzione `generateBombs(numBombs, gridSize)` per ottenere la posizione delle bombe in base alla difficoltà e al numero di bombe.
  - Utilizzo un ciclo per generare quadrati simili a quanto fatto in precedenza, assegnando loro la larghezza e aggiungendo un gestore di eventi 'click' tramite `addEventListener`.

- Definisco una funzione `generateBombs(numBombs, gridSize)` per generare posizioni casuali per le bombe:
  - Utilizzo un oggetto `Set` chiamato `bombPositions` per garantire che non ci siano posizioni duplicate di bombe.
  - Utilizzo un ciclo `while` per continuare a generare posizioni casuali finché il numero di bombe generate non raggiunge `numBombs`.
  - All'interno del ciclo, genero una posizione casuale all'interno della griglia e la aggiungo all'oggetto `bombPositions` se non è già presente.
  - Restituisco un array convertendo l'oggetto `bombPositions` in un array.

- Definisco una funzione `createSquare(index, size)` per creare un quadrato:
  - Creo un elemento `<div>` per rappresentare il quadrato.
  - Assegno la classe 'square' all'elemento quadrato e imposto la larghezza in base al parametro `size`.
  - Inserisco il numero dell'indice direttamente nel quadrato.
  - Restituisco l'elemento quadrato creato.

- Definisco una funzione `squareClickHandler()` per gestire il clic su un quadrato:
  - Verifico se il gioco è già finito impostando `gameIsOver` su `true`. In tal caso, esco dalla funzione.
  - Ottengo il numero del quadrato cliccato e verifico se è una bomba, utilizzando la lista `bombPositions`.
  - Se il quadrato è una bomba, mostro tutte le bombe colorando i quadrati di rosso, imposto `gameIsOver` su `true` e mostro un messaggio di avviso.
  - Altrimenti, cambio lo stato del quadrato a "cliccato" e lo coloro di blu.

- Aggiungo un event listener al pulsante "Genera" per chiamare `initializeGame()` quando il pulsante viene cliccato.

- Inizializzo il gioco all'avvio chiamando `initializeGame()`.