import React from 'react';
import './Order.css';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { showOrderPopup } from '../../redux/actions';

function Order({ openOrderItem, item }) {
  const { number, sale, goods, date } = item;
  const discount = sale * 38.17;
  const titles = [...new Map(goods.map((item) => [item.id, item])).values()];
  const dispatch = useDispatch();
  function handleClickOpen() {
    openOrderItem();
    dispatch(showOrderPopup(item))
  }

  const calendarStrings = {
    sameDay: '[Сегодня:] hh:mm',
    nextDay: '[Завтра:] hh:mm',
    sameElse: 'DD.MM.YY: HH:MM',
  };

  return (
    <li className="order" onClick={handleClickOpen}>
      <div className="order__number-container">
        <h2 className="order__number">Заказ №{number}</h2>
        <p className="order__sale">{Math.round(discount)} Р</p>
      </div>
      {date ? (
        <p className="order__delivery">
          <Moment calendar={calendarStrings}>{date}</Moment>
        </p>
      ) : (
        <p className="order__delivery">Заказ не готов</p>
      )}
      <ul className="order__subtitle-container">
        <li className="order__subtitle">&#x2219; товаров {goods.length} шт.</li>
        <li className="order__subtitle">
          &#8729; наименований {titles.length} шт
        </li>
      </ul>
    </li>
  );
}

export default Order;
