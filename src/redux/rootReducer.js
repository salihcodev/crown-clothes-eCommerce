// UTILITIES:
import { combineReducers } from 'redux';

// REDUCERS:
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoriesReducer from './directories/directoriesReducer';
import collectionsReducer from './collections/collectionsReducer';

// PERSIST UTILITIES:
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directories: directoriesReducer,
  collections: collectionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
