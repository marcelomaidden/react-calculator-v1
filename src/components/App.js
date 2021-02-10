import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

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

    let { total, next } = this.state;
    total = total == null ? 0 : total;
    next = next == null ? 0 : next;
    calculate({ total, next, buttonName }, buttonName);
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <Display result={next === null ? total : next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
