import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      Count: this.state.Count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Result: {this.state.Count}</h1>
        <button onClick={this.handleIncrement}>Incrememnt</button>
      </div>
    );
  }
}

export default Counter;
