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