let randomNumber = () => Math.floor(Math.random() * 101);

const isDivisible = (number) => (randomNumber() % number) === 0;

// console.log(randomNumber());
// console.log(isDivisible(2));

describe('isDivisible', () => {
  
  test('randomNumber é chamada', () => {
    randomNumber = jest.fn();
    isDivisible(2);
    expect(randomNumber).toHaveBeenCalled();
  });

  test('randomNumber é par', () => {
    randomNumber = jest.fn().mockReturnValue(2);
    expect(isDivisible(2)).toBeTruthy();
  });

})
