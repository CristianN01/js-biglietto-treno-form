


const bottone = document.querySelector(' button');

bottone.addEventListener('click', function(){
let kmQuestion = parseFloat(document.querySelector('div.input-km > input').value, 10);

let ageQuestion = parseInt(document.querySelector('div.input-age > input#eta').value, 10);

const priceNormalEl = document.querySelector('span#biglietto-nosconto')
const priceAgeEl = document.querySelector('span#sconto-eta')
const priceEl = document.querySelector('span#prezzo')

const prezzoAlKilometro = 0.267113;
let priceTicket = kmQuestion * prezzoAlKilometro;
let discount;

if(ageQuestion < 21) {
    discount = ((priceTicket / 100) * 24.552);
    
} else if (ageQuestion > 63) {
    discount = ((priceTicket / 100) * 37.893);
    
} else {
    discount = 0;
}


let ticket = priceTicket - discount;
priceNormalEl.innerHTML = priceTicket.toFixed(2) + '$'; 
priceAgeEl.innerHTML = discount.toFixed(2) + '$';
priceEl.innerHTML = ticket.toFixed(2) + '$';

console.log(ticket.toFixed(2), discount);


});