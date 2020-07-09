import React, {Component} from 'react';
import Context from './Context';
import Feature from './Feature';

export default class MainForm extends Component {
  static contextType = Context;

  render() {
    const features = Object.keys(this.context.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

        return (
          <Feature className="feature" key={featureHash} feature={feature}></Feature>
        );      
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}