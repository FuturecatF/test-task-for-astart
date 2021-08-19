import React from 'react';
import './App.css';
import Header from '../Header/Header';
import OrderListPopup from '../OrderListPopup/OrderListPopup';
// import OrderPopup from '../OrderPopup/OrderPopup';

function App() {
  return (
    <body className="page">
      <div className="page__container">
        <Header />
        <OrderListPopup />
      {/*  <OrderPopup /> */}
      </div>
      </body>
  );
}

export default App;
