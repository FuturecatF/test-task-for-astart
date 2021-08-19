import React from 'react';
import './Order.css';

function Order() {
  return (
    <div className="order">
<div className="order__number-container">
  <h2 className="order__number">Заказ №1002</h2>
  <p className="order__sale">305 Р</p>
</div>
<p className="order__delivery">Сегодня: 12:00</p>
    </div>
  );
}

export default Order;
