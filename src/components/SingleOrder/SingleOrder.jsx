import React from 'react';
import './SingleOrder.css';

function SingleOrder({ item }) {
  const { count, price, name } = item;
  const realPrice = price * 38.17;


  return (
    <li className="singleorder">
<div className="singleorder__container">
          <p className="singleorder__title">{name}</p>
          <p className="singleorder__count">Количество {count} шт</p>
        </div>
        <p className="singleorder__price">{Math.round(realPrice)} Р</p>
    </li>
  );
}

export default SingleOrder;
