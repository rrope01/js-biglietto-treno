const pricePerKm = 0.21;
const distance = parseFloat(prompt("Quanti km devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
var finalPrice = 0;
if (age < 18) finalPrice = (pricePerKm * distance) * 0.8;
else if (age > 65) finalPrice = (pricePerKm * distance) * 0.6;
else finalPrice = pricePerKm * distance;
console.log(`Il prezzo del biglietto è: ${finalPrice.toFixed(2)}€`);