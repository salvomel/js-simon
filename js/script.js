// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Alert iniziale di presentazione
alert('Memorizza i seguenti numeri, dopo 30 secondi ti verrà chiesto quali ricorderai!');

// Tempo fissato per countdown (30 secondi)
const countdown = 30000;

// Funzione countdown che richiama funzione questions e tempo definito
setTimeout(questions, countdown);

// Array per i numeri random da inserire
const randomArray = [];

// Ciclo for per i 5 alert richiesti, che vengono eseguiti prima della funzione setTimeout
for (let i=0; i<5; i++) {

    // Variabile random da 1 a 20
    let randomNumber = getRndInteger(1, 20);
    // Push nell'array
    randomArray.push(randomNumber);
    // Alert del numero random
    alert('Memorizza il numero:' + ' ' + randomNumber);
}

console.log(randomArray);

// Array per i numeri indovinati dall'utente 
const userArray = [];

// Funzione per setTimeout con dentro prompt dentro ciclo forEach
function questions() {

    // Per ogni numero random chiedo un numero all'utente un numero ricordato
    randomArray.forEach ((element) => {

        let userNumber = parseInt(prompt('Indicare il numero che ricordi'));
        if (randomArray.includes(userNumber)) {
             userArray.push(userNumber);
        } 
        console.log(userArray);
    });

    // Alert finale con numeri indovinati
    alert(`Hai indovinato ${userArray.length} numeri! I numeri indovinati sono: ${userArray}`);
}

// Funzione random numbers
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  
