// BASIC:
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';

// PERSIST UTILITIES:
import { persistStore } from 'redux-persist';

// MIDDLEWARES:
import { logger } from 'redux-logger';

// set middleware list
const middleWares = [logger];

// local store
const store = createStore(rootReducer, applyMiddleware(...middleWares));

// persistor local store
const persistor = persistStore(store);

export { store, persistor };
