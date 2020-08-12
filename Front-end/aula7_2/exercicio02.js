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