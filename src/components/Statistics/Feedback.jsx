import { Component } from "react";

export default class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percentage: this.props.initialValue,
  };

  handleIncrementGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };
  handleIncrementBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));

    calculateTotal = () => {
      this.setState((state) => ({
        total: state.good + state.neutral + state.bad,
      }));
    };
  };
  calculatePercentage = () => {};
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good} </li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.state.total}</li>
            <li>Positive feedback: {this.state.percentage}%</li>
          </ul>
        </div>
      </div>
    );
  }
}
