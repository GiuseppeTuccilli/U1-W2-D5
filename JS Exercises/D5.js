/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets[0]);
pets.shift();
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AB123CD";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars[cars.length] = {
  brand: "FIAT",
  model: "punto",
  color: "red",
  trims: ["life", "style", "r-line"],
  licensePlate: "EF456GH",
};

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0];
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let p = cars[i].color.charAt(0);
  if (p === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (i < numericArray.length) {
  if (numericArray[i] !== 32) {
    console.log(numericArray[i]);
    i = i + 1;
  } else {
    console.log(numericArray[i]);
    i = numericArray.length;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

newArr = [];

/*
let alf = "abcdefghilmnopqrstuvz";

for (let i = 0; i < charactersArray.length; i++) {          //senza switch avrei fatto così
  newArr[i] = alf.indexOf(charactersArray[i]) + 1;
}

*/

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      newArr[i] = 1;
      break;
    case "b":
      newArr[i] = 2;
      break;
    case "c":
      newArr[i] = 3;
      break;
    case "d":
      newArr[i] = 4;
      break;
    case "e":
      newArr[i] = 5;
      break;
    case "f":
      newArr[i] = 6;
      break;
    case "g":
      newArr[i] = 7;
      break;
    case "h":
      newArr[i] = 8;
      break;
    case "i":
      newArr[i] = 9;
      break;
    case "l":
      newArr[i] = 10;
      break;
    case "m":
      newArr[i] = 11;
      break;
    case "n":
      newArr[i] = 12;
      break;
    case "o":
      newArr[i] = 13;
      break;
    case "p":
      newArr[i] = 14;
      break;
    case "q":
      newArr[i] = 15;
      break;
    case "r":
      newArr[i] = 16;
      break;
    case "s":
      newArr[i] = 17;
      break;
    case "t":
      newArr[i] = 18;
      break;
    case "u":
      newArr[i] = 19;
      break;
    case "v":
      newArr[i] = 20;
      break;
    case "z":
      newArr[i] = 21;
      break;
  }
}
console.log(newArr);
