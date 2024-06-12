import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  // update the state when a button is clicked [state] - computed property
  handleIncrement = (state) => {
    this.setState((prev) => ({ [state]: prev[state] + 1 }));
  };

  // display the total number of feedbacks
  calculateTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // display the percentage of positive feedbacks
  calculatePercentage = () => {
    const { good } = this.state;
    const total = this.calculateTotal();

    // if total is greate than 0, return positive %, else 0
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ["good", "neutral", "bad"];
    const total = this.calculateTotal();
    const percentage = this.calculatePercentage();

    return (
      <div>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics:">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
