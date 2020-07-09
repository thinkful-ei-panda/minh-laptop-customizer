import React, { useContext } from 'react';
import Context from './Context';

export default function Total() {
  const context = useContext(Context);

  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const total = Object.keys(context.selected).reduce(
    (acc, curr) => acc + context.selected[curr].cost,
    0
  );

  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    </div>
  );
}