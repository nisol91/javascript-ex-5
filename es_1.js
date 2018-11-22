// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.


var studente = {
  'nome': 'Nicola',
  'cognome': 'Solzi',
  'età': 27,
};

for (var key in studente) {
  console.log(key + ' ' +studente[key]);
}
