import React from 'react';
import './OrderListPopup.css';
import Order from '../Order/Order';
import Popup from '../Popup/Popup';
function OrderListPopup({ isOpen, openOrderItem, cards }) {

  return (
    <Popup isOpen={isOpen} className='popup_opened-orderlist'>
      <div className="orderlist">
  <h2 className="orderlist__title">Список заказов</h2>
  <button className="orderlist__btn-filter"></button>

</div>
<ul className="orderlist__items">
  {cards.map((item) => ( <Order openOrderItem={openOrderItem} item={item} key={item.id}/>))}



  </ul>
    </Popup>
  );
}

export default OrderListPopup;
