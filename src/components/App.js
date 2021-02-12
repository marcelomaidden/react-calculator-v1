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
      lastClicked: null,
    };
  }

  handleClick = buttonName => {
    this.setState(({
      total, next, operation, lastClicked,
    }) => calculate({
      total, next, operation, lastClicked,
    }, buttonName));
    this.setState({ lastClicked: buttonName });
  }

  render() {
    const result = this.state;
    const {
      total, next, operation, lastClicked,
    } = this.state;
    return (
      <>
        <div>
          {
            `${total} ${operation} ${next} ${lastClicked}`
          }
        </div>
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
