// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.



var studenti = [
  {
    'nome': 'Nicola',
    'cognome': 'Solzi',
    'età': 27,
  },
  {
    'nome': 'Luca',
    'cognome': 'Rossi',
    'età': 20,
  },
  {
    'nome': 'Francesco',
    'cognome': 'Raggi',
    'età': 29,
  },
];


//creo un oggetto vuoto e poi sostituisco coi prompt cio che voglio che l utente inserisca e poi pusho l oggetto nell array degli studenti

for (var i = 0; i < 1; i++) {
  var new_student = {
    'nome': '',
    'cognome': '',
    'età': 0,
  }

  // new_student.nome = prompt('Inserisci nome');
  // new_student.cognome = prompt('Inserisci cognome');
  // new_student.età = parseInt(prompt('Inserisci età'));

  // in alternativa faccio un for in su new_student

  for (var key in new_student) {

    if (key === 'età') {
      new_student[key] = parseInt(prompt('Inserisci valore per: ' + key));
    } else {
      new_student[key] = prompt('Inserisci valore per: ' + key);
    }
  }

  studenti.push(new_student)
}

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].età);
}

//trova eta media studenti

var somma = 0;
for (var i = 0; i < studenti.length; i++) {
  somma += studenti[i].età;
}

console.log(somma);

var media = somma/studenti.length;
console.log(media);
console.log(Math.floor(media));
