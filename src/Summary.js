import React, { useContext } from 'react';
import Context from './Context';

export default function Summary() {
  const context = useContext(Context);

  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const summary = Object.keys(context.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = context.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  return (
    <>
      {summary}
    </>
  );
}