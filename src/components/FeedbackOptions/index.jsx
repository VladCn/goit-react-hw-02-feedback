import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 50px;
  text-transform: capitalize;
  width: 120px;
  height: 40px;
  font-size: 30px;
`;

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(item => (
        <Button key={item} name={item} onClick={onLeaveFeedback}>
          {item}
        </Button>
      ))}
    </div>
  );
}
