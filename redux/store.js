import { createStore } from 'redux';

import reducer from './reducers/index';

const configureStore = (initialState) => createStore(reducer, initialState);

export default configureStore;
