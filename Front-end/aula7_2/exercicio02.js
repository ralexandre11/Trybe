const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 01 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (object, key, value) => object[key] = value; 
addKey(lesson2, "turno", "manhã");
console.log(Object.entries(lesson2));

// 02 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (myObject) => Object.keys(myObject); 
console.log(listKeys(lesson2));

// 03 Crie uma função para mostrar o tamanho de um objeto.
const lenghtObject = (myObject) => Object.keys(myObject).length;
console.log("O tamanho do objeto é ", lenghtObject(lesson2));

// 04 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (myObject) => Object.values(myObject);
console.table(listValues(lesson2));

// 05 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(Object.entries(allLessons));

// 06 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const countStudents = (myObject) => {
  let total = 0;
  const myKeys = Object.keys(myObject);
  for (let key in myKeys) {
    total += myObject[myKeys[key]].numeroEstudantes; 
  }
  return total;
} 
console.log(countStudents(allLessons));

// 07 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (myObject, index) => Object.values(myObject)[index];
console.log(getValueByNumber(lesson2, 2));

// 08 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (myObject, myKey, myValue) => {
  let itsOK = false;
  if (myObject[myKey] === myValue) {
    itsOK = true;
  }
  return itsOK;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false