const INITIAL_STATE = [];

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user ];
    default:
      return state;
  }
}

export default formReducer;