


const bottone = document.querySelector('section>button');

bottone.addEventListener('click', function(){
let kmQuestion = parseFloat(document.querySelector('input').value, 10);

let ageQuestion = parseInt(document.querySelector('section > input#eta').value, 10);

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

console.log(ticket.toFixed(2), discount);

});