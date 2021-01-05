/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  makeIncrementer = (amount) => () => this.setState((prevState) => ({
    count: prevState.count + amount,
  }));

  makeDecrementer = (amount) => () => this.setState((prevState) => ({
    count: prevState.count - amount,
  }));

  render() {
    return (
      <div data-test="component-app">
        <h1>Learn React</h1>
        <p>
          Count:
          {this.state.count}
        </p>
        <ButtonComponent type="button" className="increment" clickedMethod={this.makeIncrementer(1)} name="Increment" />
        <ButtonComponent type="button" className="decrement" clickedMethod={this.makeDecrementer(1)} name="Decrement" />
      </div>
    );
  }
}

export default App;
