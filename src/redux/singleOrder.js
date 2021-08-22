import { SHOW_ORDER } from './types';

const initialState = {
	singleOrder: [],
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ORDER:
			return { ...state, singleOrder: action.payload };
		default:
			return state;
	}
};