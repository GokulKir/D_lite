// store.ts
import { createStore, combineReducers } from 'redux';
import countryModalReducer from './reducer';

const rootReducer = combineReducers({
    countryModal: countryModalReducer,
});

const store = createStore(rootReducer);

export default store;
