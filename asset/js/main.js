// Il programma chiedere all'utente 
//il numero di chilometri che vuole percorrere e l'età.

// inizializziamo e verifichiamo l'inserimento corretto dei dati per la variabile km
var km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

if (km > 0) {
    document.getElementById('km').innerHTML = ' ' + km;
    // console.log(km + ' KM');
} else {
    alert('DATO NON CORRETTO, inserisci i chilometri')
}

//inizializziamo e verifichiamo l'inserimento corretto dei dati per la variabile eta
var eta = parseInt(prompt('Scopri se hai diritto a uno sconto in base alla tua età. Quanti anni hai?'));

if (eta > 0) {
    document.getElementById('eta').innerHTML = ' ' + eta;
    // console.log(eta + ' Anni');
} else {
    alert('DATO NON CORRETTO, inserisci la tua età')
}

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = km * 0.21;
document.getElementById('tratta').innerHTML = '€ ' + prezzo.toFixed(2);
//console.log('Costo della tratta € ' + prezzo.toFixed(2));


// va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
var sconto;

if (eta <= 17) {
    sconto = ((prezzo * 20) / 100);
    document.getElementById('sconto').innerHTML = '20% di sconto, pari a € ' + sconto.toFixed(2);
    //console.log('hai diritto al 20% di sconto sul prezzo del biglietto, pari a € ' + sconto.toFixed(2));
} else if (eta >= 65) {
    sconto = ((prezzo * 40) / 100);
    document.getElementById('sconto').innerHTML = '40% di sconto, pari a € ' + sconto.toFixed(2);
    //console.log('hai diritto al 40% di sconto sul prezzo del biglietto, pari a € ' + sconto.toFixed(2))
} else {
    sconto = 0;
    document.getElementById('sconto').innerHTML = 'NESSUNO';
    // console.log('Non hai sconti da applicare sul prezzo del biglietto')
}

// L'output del prezzo finale va messo fuori in forma umana 
var prezzoTotale = prezzo - sconto;
document.getElementById('tot_prezzo').innerHTML = '€ ' + prezzoTotale.toFixed(2);
//console.log('Prezzo finale € ' + prezzoTotale.toFixed(2));


