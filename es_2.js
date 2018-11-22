// Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome


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

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
}
