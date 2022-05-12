import React, { useContext } from 'react';
import '../styles/components/Success.scss';
import AppContext from '../context/AppContext';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map" />
        <h2>{`${buyer[0].address}`}</h2>
      </div>
    </div>
  );
}

export default Success;
