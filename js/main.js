// function calcoloBiglietto(kilometri, eta) {
//   //METODO SBAGLIATO PER TESTARE CICLO FOR
//   let tmp;
//     for (i = 0; i <= kilometri; i++) {
//       if (i === kilometri) {
//         tmp = i * 0.21;
//         if (age < 18) {
//           return tmp - (20 * tmp) / 100;
//         } else if (age > 65) {
//           return tmp - (40 * tmp) / 100;
//         }
//       }
//     }

//   //METODO PIU SEMPLICE
//   let prezzoTicket = kilometri * 0.21;
//   if (eta < 18) {
//     return prezzoTicket - (20 * prezzoTicket) / 100;
//   } else if (eta > 65) {
//     return prezzoTicket - (40 * prezzoTicket) / 100;
//   }
// }

//INSERITI I DUE INPUT PER L'UTENTE, ARROTONDO PER ECCESSO O PER DIFETTO I KM
const distance = Math.round(parseFloat(prompt("Quanti KM devi percorrere?")));
const age = parseInt(prompt("Quanti anni hai?"));

//CALCOLO PREZZO BIGLIETTO
let prezzoBiglietto = distance * 0.21; // prezzo senza sconto applicato
if (age < 18) {
  prezzoBiglietto = prezzoBiglietto - (20 * prezzoBiglietto) / 100; //sconto minorenni
} else if (age > 65) {
  prezzoBiglietto = prezzoBiglietto - (40 * prezzoBiglietto) / 100; // sconto anziani
}

//OUTPUT USER
const outputBiglietto = prezzoBiglietto.toFixed(2);
alert(`Il prezzo del biglietto è di ${outputBiglietto}€`);

// TOTALMENTE A CASO
// const prezzoFinale = calcoloBiglietto(distance, age).toFixed(2);
// alert(`Il prezzo del biglietto è di ${prezzoFinale}€`);
