import React from 'react';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(item => (
        <button key={item} name={item} onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
}
