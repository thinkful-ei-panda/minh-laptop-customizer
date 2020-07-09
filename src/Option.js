import React, { useContext } from 'react';
import slugify from 'slugify';
import Context from './Context';

export default function Option (props) {
  
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const feature = props.feature;
  const item = props.item;
  const context = useContext(Context);
  const itemHash = slugify(JSON.stringify(item));

  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === context.selected[feature].name}
        onChange={e => context.updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );
}