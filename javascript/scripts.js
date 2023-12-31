/*
    Calcolo del prezzo del biglietto del treno

    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*

Qual è il problema? Calcolare il prezzo totale del viaggio.

- Due prompt: n chilometri e n anni;
- Costo del viaggio: 0.21€ * km;
- Se n anni < 18: costo del viaggio: costo del viaggio - 20%;
- Se n anni > 65: costo del viaggio: costo del viaggio - 40%;

note: il prezzo è da indicare con massimo due decimali

*/

let chilometri = prompt("Quanti chilometri vuoi percorrere?");
let anni = prompt("Quanti anni hai?");
let costo_del_viaggio = (0.21 * chilometri);

let n_chilometri = parseInt(chilometri);
let n_anni = parseInt(anni);

if ((!isNaN(n_chilometri)) && (!isNaN(n_anni))) {
    if (n_anni < 18) {
        costo_del_viaggio = costo_del_viaggio - (costo_del_viaggio / 5);
    }
    
    else if (n_anni > 65) {
        costo_del_viaggio = costo_del_viaggio - (costo_del_viaggio * 2 / 5);
    }

    costo_del_viaggio_due_decimali = costo_del_viaggio.toFixed(2);
    simbolo_euro = "€"

    document.getElementById("my-container").innerHTML += costo_del_viaggio_due_decimali + simbolo_euro;
}

else {
    document.getElementById("my-container").innerHTML = "Devi inserire un numero!";
}



