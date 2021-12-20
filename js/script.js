// seconda parte esercizio:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// Creo una funzione per generare un numero random
function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

// Creo la funzione di un ciclo for per la creazione di n box e per generare 16 numeri randomici univoci da inserire nell'array numbers
function buildGrid(output, maxNum, width){
    output.innerHTML = '';
    output.className = width;
    numbers = [];
    for (let i = 1; i <= maxNum; i++) {
        createNewBox(containerHtml, i);
        while (numbers.length < 16) {
            let randomNumber = getRandom(1, maxNum);
            if (!numbers.includes(randomNumber)){
                numbers.push(randomNumber);
            }
        } 
    }
}

// Creo una funzione per creare un box e la colorazione del box al click (con la funzione colorClick)
function createNewBox (output, num) {
    let newSquare = document.createElement('div');
    newSquare.className ='box';
    newSquare.innerHTML = num;
    output.append(newSquare);
    colorClick(newSquare, num);
}


// Creo una nuova funzione per la colorazione dei box
function colorClick(box, i) {
    box.addEventListener('click', function() {
        this.classList.add('blue');
        // se l'array numbers (in cui ho generato 16 numeri random) include il numero corrispondente al box cliccato, questo diventa rosso
        if(numbers.includes(i)){
           this.classList.add('red');
           this.classList.remove('blue');
        }
    })
}

// Assegno le variabili per i 3 button
const levelOne = document.getElementById("level-1");
const levelTwo = document.getElementById("level-2");
const levelThree = document.getElementById("level-3");

// Assegno la variabile per stampare in HTML
const containerHtml = document.getElementById("container");

// Creo un evento al click per ogni button e assegno il numero di box da creare richiamando la funzione
levelOne.addEventListener('click', function (){
    buildGrid(containerHtml, 100, 'width-level-1');
    console.log(numbers);  
});

levelTwo.addEventListener('click', function (){
    buildGrid(containerHtml, 81, 'width-level-2');
    console.log(numbers);
});

levelThree.addEventListener('click', function (){
    buildGrid(containerHtml, 49, 'width-level-3');
    console.log(numbers);
});