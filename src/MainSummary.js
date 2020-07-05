import React, { useContext } from 'react';
import Context from './Context';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function MainSummary () {
  const context = useContext(Context);

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

  const total = Object.keys(context.selected).reduce(
    (acc, curr) => acc + context.selected[curr].cost,
    0
  )

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  )
  
}