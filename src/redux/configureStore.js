import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer } from './mainReducer';

export const rootReducer = combineReducers({
  mainReducer
});

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));
