import React, { Component } from "react";
export class Counter extends Component {
  //define state
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h2> Counter Example</h2>
        <p> The counter is {this.state.count}</p>
        <button onClick={this.Increment}> ++ </button>
        <button onClick={this.Decrement}> -- </button>

      </div>
    );
  }
}
export default Counter;
