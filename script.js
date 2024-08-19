let voto = prompt(`Inserisci il tuo voto`);

if (voto >= 0 && voto < 18) {
    alert(`Insufficiente!!`);
}else if (voto >= 18 && voto <21) {
    alert(`Sufficiente!!`);
}else if (voto >= 21 && voto <24) {
    alert(`Buono!`);
}else if (voto >= 24 && voto <27) {
    alert(`Distinto!`);
}else if (voto >= 27 && voto <30) {
    alert(`Ottimo!`);
}else if (voto == 30) {
    alert(`Eccellente!`);
}else {
    alert(`Valore non valido! \nInserire un valore tra 0 e 30`);
}


// UTILIZZANDO SWITCH


let secondoVoto = prompt(`Inserisci il voto della seconda materia`);

switch (true){
    case secondoVoto >= 0 && secondoVoto < 18:
        alert(`Insufficiente!!`);
        break;

    case secondoVoto >= 18 && secondoVoto < 21:
        alert(`Sufficiente!!`);
        break;
    
    case secondoVoto >= 21 && secondoVoto < 24:
        alert(`Sufficiente!!`);
        break;

    case secondoVoto >= 24 && secondoVoto < 27:
        alert(`Sufficiente!!`);
        break;

    case secondoVoto >= 27 && secondoVoto < 30:
        alert(`Sufficiente!!`);
        break;    

    case secondoVoto == 30:
        alert(`Sufficiente!!`);
        break;

    default:
        alert(`Valore non valido! \nInserire un valore tra 0 e 30`);
        break;
}