import {
  REQUEST_CARDS,
  SHOW_ORDER,
} from './types';

export function requestCards() {
  return {
    type: REQUEST_CARDS,
  };
}

export function showOrderPopup(item) {
  return {
    type: SHOW_ORDER,
    payload: item,
  };
}



