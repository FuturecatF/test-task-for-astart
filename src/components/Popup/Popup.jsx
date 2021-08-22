import React from 'react';
import './Popup.css';
// import Order from '../Order/Order';

function Popup({ children, isOpen, className }) {
  return (
    <div className={`popup ${isOpen ? className : ''}`}>
      <div className="popup__container">{children}</div>
    </div>
  );
}

export default Popup;
