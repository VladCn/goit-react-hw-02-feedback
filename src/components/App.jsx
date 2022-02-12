import { Feedback } from './Feedback';
import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './SectionTitle';

export class App extends React.Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  getTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  getPositiveFeedback = () => {
    return ((this.state.good / this.getTotal()) * 100).toFixed(2);
  };
  handleLeaveFeedback = ({ target }) => {
    this.setState(prev => ({
      [target.name]: prev[target.name] + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        {/*React homework template*/}
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.getTotal()}
            positivePercentage={this.getPositiveFeedback()}
          />
        </Section>
      </div>
    );
  }
}
