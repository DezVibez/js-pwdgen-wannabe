

/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/ 


console.log("JS OK")

/*Dichiarazione variabili e funzione risultato a console*/ 

const nome = prompt("Inserisci il tuo nome")
console.log(nome)

const cognome = prompt("Inserisci il tuo cognome")
console.log(cognome)

const colorePreferito = prompt("Inserisci il tuo colore preferito")
console.log(colorePreferito)

let risultato = nome + cognome + colorePreferito

risultato = risultato + "21"
console.log(risultato)