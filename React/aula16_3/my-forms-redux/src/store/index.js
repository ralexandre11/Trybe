import { createStore, combineReducers } from 'redux';
import formReducer from '../reducers';

const rootReducer = combineReducers({ formReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
