const INITIAL_STATE = [];

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user ];
    default:
      return state;
  }
}

// {
//   {name: 'Ricardo', email: 'ric@ig.com'}
//   {name: 'Cristiano', email: 'ric@ig.com'}
//   {name:}
// }

export default formReducer;