import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

calculate(1, 2, '-');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState = {
      ...this.state,
      operation: buttonName,
    };

    const { total, next } = this.state;

    calculate(total, next, buttonName);
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <Display result={next === null ? total : next} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
