import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { mapReducer } from './mapReducer';

const store = createStore(mapReducer, composeWithDevTools());
export default store;
