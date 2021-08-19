import React from 'react';
import './OrderListPopup.css';
import Order from '../Order/Order';
function OrderListPopup() {
  return (
    <div className="orderlist">
<div className="orderlist__container">
  <h2 className="orderlist__title">Список заказов</h2>
  <button className="orderlist__btn-filter"></button>

</div>
<Order />
  <Order />
    </div>
  );
}

export default OrderListPopup;
