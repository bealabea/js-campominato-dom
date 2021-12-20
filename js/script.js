// seconda parte esercizio:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
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
        createNewBox(containerHtml, maxNum, i);
        while (numbers.length < 16) {
            let randomNumber = getRandom(1, maxNum);
            if (!numbers.includes(randomNumber)){
                numbers.push(randomNumber);
            }
        } 
    }
}



// Creo una funzione per creare un box e la colorazione del box al click (con la funzione colorClick)
function createNewBox (output, maxNum, num) {
    let newSquare = document.createElement('div');
    newSquare.className ='box';
    newSquare.innerHTML = num;
    output.append(newSquare);
    colorClick(newSquare, maxNum, num);
}

let blueBox = 0;
// Creo una nuova funzione per la colorazione dei box
function colorClick(box, maxNum, i) {
    box.addEventListener('click', function() {
        
        // se il box cliccato non contiene un numero corrispondente all'array numbers (in cui ho generato 16 numeri random) questo diventerà blu,
        // e se il numero dei box blu raggiunge il numero massimo esclusi i numeri dell'array,
        // allora uscirà il messaggio HAI VINTO e il button per ricaricare la pagina
        if(!numbers.includes(i)){
            this.classList.add('blue');
            blueBox++
            if (blueBox === (maxNum - 16)) {
                winHtml.classList.remove('hide');
                playAgainHtml.classList.remove('hide');
            }
        // ALTRIMENTI il numero del box cliccato corrisponde al numero contenuto nell'array quindi
        // il box diventerà rosso e uscirà il messaggio GAME OVER e il button per ricaricare la pagina   
        } else {
            this.classList.add('red');
            this.classList.remove('blue');
            gameOverHtml.classList.remove('hide');
            playAgainHtml.classList.remove('hide');
        }
    })
}

// Assegno le variabili per i 3 button
const levelOne = document.getElementById("level-1");
const levelTwo = document.getElementById("level-2");
const levelThree = document.getElementById("level-3");

// Assegno le variabili per stampare in HTML
const containerHtml = document.getElementById("container");
const gameOverHtml = document.querySelector('.game-over');
const playAgainHtml = document.getElementById('play-again');
const winHtml = document.querySelector('.winner');

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

// Creo un evento al click del button "ricomincia" per ricaricare la pagina
playAgainHtml.addEventListener('click', function(){
    window.location.reload()
})