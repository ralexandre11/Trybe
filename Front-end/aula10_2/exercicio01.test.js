const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 1000);
};

describe('Test string Uppercase', () => {
  it('if string is uppercase', done => {
    uppercase('teste', (strUpperCase) => {
      expect(strUpperCase).toBe('TESTe');
      done();
    });
  });
});
