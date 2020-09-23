import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
