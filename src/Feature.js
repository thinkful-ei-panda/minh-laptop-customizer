import React, { useContext } from 'react';
import Context from './Context';
import slugify from 'slugify';
import Option from './Option';

export default function Feature (props) {
  const context = useContext(Context);

  const options = context.features[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <Option itemHash={itemHash} item={item} feature={props.feature}/>
    );
  });

  return (
    <fieldset className="feature" key={props.key}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}