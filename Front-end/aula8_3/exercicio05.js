    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  const countA = (acc, name) => acc + (name.split('')
    .filter(item => item === 'a' || item === 'A').length);

  return names.reduce(countA, 0);
}
// console.log(names[0].split(''));
// console.log(containsA())
assert.deepEqual(containsA(), 20);