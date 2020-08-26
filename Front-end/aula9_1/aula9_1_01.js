const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return userToReturn;
};

assert.equal(userFullName(getUser()), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(userNationality(getUser()), "Ivan is Russian"); // complete a chamada da função de getUser