import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      count: 0,
      error: false,
    };
  }

  makeIncrementer = (amount) => this.setState((prevState) => ({
    count: prevState.count + amount,
    error: prevState.error ? false : prevState.error,
  }));

  makeDecrementer = (amount) => this.setState((prevState) => (prevState.count > 0 ? {
    count: prevState.count - amount,
  } : { error: !prevState.error }));

  render() {
    const { isLoading, count, error } = this.state;
    const errorDiv = error ? 'errorMessage' : 'noErrorMessage';
    const errorMessage = <p data-test="err-message" className={errorDiv}>Error: Unable to Decrement the counter.</p>;
    return (
      <div data-test="component-app" className="App">
        {isLoading
          ? <div><h1>Loading Div...</h1></div> : (
            <>
              <h1>Learn React</h1>
              <p data-test="counter-display">
                Count:
                <span data-test="counter-value">{count}</span>
              </p>
              <button
                type="button"
                className=""
                onClick={() => this.makeIncrementer(1)}
                data-test="increment-button"
                name=""
              >
                Incrementer
              </button>
              <button
                type="button"
                className=""
                onClick={() => this.makeDecrementer(1)}
                data-test="decrement-button"
                name=""
              >
                Decrementer
              </button>
              <div>
                {errorMessage}
              </div>
            </>
          )}
      </div>
    );
  }
}

export default App;
