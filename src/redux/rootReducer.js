import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { orderReducer } from './singleOrder';

export const rootReducer = combineReducers({
	cards: cardsReducer,
  order: orderReducer,

});