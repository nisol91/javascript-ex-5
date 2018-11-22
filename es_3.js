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


//credo un oggetto vuoto e poi sostituisco coi prompt cio che voglio che l utente inserisca e poi pusho l oggetto nell array degli studenti

for (var i = 0; i < 3; i++) {
  var new_student = {
    'nome': '',
    'cognome': '',
    'età': 0,
  }

  new_student.nome = prompt('Inserisci nome');
  new_student.cognome = prompt('Inserisci cognome');
  new_student.età = parseInt(prompt('Inserisci età'));

  studenti.push(new_student)
}

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].età);
}
