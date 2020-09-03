const createRadom = () => {
  return new Promise((resolve, reject) => {
    const myArray = [];
    for (let index = 0; index < 9; index += 1) {
      const number = Math.floor(Math.random() * 50 + 1);
      myArray.push(Math.pow(number, 2));
    }
    const sum = myArray.reduce((acc, item) => acc + item);
    console.log(sum);
    if (sum < 8000) {
      const arrayResult = [2, 3, 5, 10].map((item) => sum / item);
      resolve(arrayResult);
    } else {
      reject('Erro');
    }
  });
};

createRadom().then(result => console.log(result))
.catch(result => console.log(result));