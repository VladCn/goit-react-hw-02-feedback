import React from 'react';

export class Feedback extends React.Component {
  getTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  getPositiveFeedback = () => {
    return ((this.state.good / this.getTotal()) * 100).toFixed(2);
  };

  render() {
    console.log('state', this.state);
    return (
      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bed</button>

        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bed: <span>{this.state.bad}</span>
        </p>
        <p>
          Total: <span>{this.getTotal()}</span>
        </p>
        <p>
          Positive feedback: <span>{this.getPositiveFeedback()}%</span>
        </p>
      </div>
    );
  }
}
