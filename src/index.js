import React, { Component } from 'react';
import { render } from 'react-dom';
import DragAndDrop from './DragAndDrop';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <DragAndDrop />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
