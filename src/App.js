import React from 'react';
import { render } from 'react-dom';

import Component from './Component';

class App extends React.Component {
  render() {
    return (
      <>
        <Component />
        <Component />
        <Component />
      </>
    );
    // <div style=blue>helloworld</div>
  }
}

render(<App />, document.getElementById('root'));
