import React from 'react';
import './OrderItemPopup.css';
import Popup from '../Popup/Popup';
import SingleOrder from '../SingleOrder/SingleOrder';
import Moment from 'react-moment';
import numberFormatter from 'number-formatter';
function OrderItemPopup({ isOpen, onclose, singleOrder }) {
  const { number, date, goods, sale } = singleOrder;
  const [isTotalPrice, setIsTotalPrice] = React.useState(Number);
  const [isTotalPercentSale, setIsTotalPercentSale] = React.useState(Number);
  React.useEffect(() => {
    if (isOpen) {
      const price = singleOrder.goods.reduce(
        (prev, next) => prev + next.price * 38.17,
        0
      );

      const realSale = sale * 38.17;
      const totalPercentSale = 100 / (price / realSale);
      const totalPrice = price - realSale;
      setIsTotalPercentSale(numberFormatter('#.#', totalPercentSale));
      setIsTotalPrice(numberFormatter('# ###.##', totalPrice));
    }
  }, [isOpen, singleOrder, sale]);

  function handleClosePopup() {
    onclose();
  }
  const calendarStrings = {
    sameDay: 'hh:mm [Сегодня]',
    nextDay: 'hh:mm [Завтра]',
    sameElse: 'HH:MM DD.MM.YY',
  };

  return (
    <Popup isOpen={isOpen} className="popup_opened-orderitem">
      <div className="orderitem">
        <div className="orderitem__container-number">
          <p className="orderitem__title">Заказ №{number}</p>
          {date ? (
            <p className="orderitem__subtitle">
              <Moment
                calendar={calendarStrings}
                className="orderitem__subtitle"
              >
                {date}
              </Moment>
            </p>
          ) : (
            <p className="orderitem__subtitle">Заказ на сборке</p>
          )}
        </div>
        <button
          className="orderitem_btn-close"
          onClick={handleClosePopup}
          type="button"
        ></button>
        <div className="orderitem__container-example">
          <p className="orderitem__title-example">Товар</p>
          <p className="orderitem__subtitle-example">
            Название наименование товара
          </p>
        </div>

        <ul className="orderitem-list">
          {goods
            ? goods.map((item, i) => (
                <SingleOrder
                  item={item}
                  key={i}
                /> /* индекс не используется для значений key, но тут кривой бэк и для работоспособности прототипа я считаю допустимо  */
              ))
            : 'Заказ пуст'}
        </ul>
        <div className="orderitem__container-summary">
          <p className="orderitem__summary-title">
            Скидка по заказу составила {isTotalPercentSale} %
          </p>
          <button className="orderitem__summary-btn" type="button">
            ИТОГО : {isTotalPrice}
          </button>
          <p className="orderitem__summary-subtitle">
            Дата выдачи заказа 10 дней с момента оплаты
          </p>
        </div>
      </div>
    </Popup>
  );
}

export default OrderItemPopup;
