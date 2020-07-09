import React from 'react';
import Summary from './Summary';
import Total from './Total';

export default function MainSummary () {

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Summary />
      <Total />
    </section>
  )
  
}