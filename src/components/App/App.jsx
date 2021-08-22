import React from 'react';
import './App.css';
import Header from '../Header/Header';
import OrderListPopup from '../OrderListPopup/OrderListPopup';
import OrderItemPopup from '../OrderItemPopup/OrderItemPopup';
import { useDispatch, useSelector } from 'react-redux';
import { requestCards } from '../../redux/actions';
function App() {
  const [isOrderListPopupOpen, setIsOrderListPopupOpen] = React.useState(true); // default true потому что так задумано в макете
  const [isOrderItemPopupOpen, setIsOrderItemPopupOpen] = React.useState(false);

  function openOrderItem() {
    setIsOrderItemPopupOpen(true);
  }

  function handleCloseOrderItem() {
    setIsOrderItemPopupOpen(false);
  }

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.fetchedCards);
  const singleOrder = useSelector((state) => state.order.singleOrder);

  React.useEffect(() => {
    dispatch(requestCards());
  }, [dispatch]);



  return (
    <div className="page">

      <div className="page__container">
        <Header  />
        <OrderListPopup
          isOpen={isOrderListPopupOpen}
          openOrderItem={openOrderItem}
          cards={cards}
        />
        <OrderItemPopup
          isOpen={isOrderItemPopupOpen}
          onclose={handleCloseOrderItem}
          singleOrder={singleOrder}
        />
      </div>

    </div>
  );
}

export default App;
