import React from 'react';

const HighScores = ({name, age, occupation, score, index}) => {
return (
  <div className="highScores">
    <li>Name: {name} | Score: {score} seconds</li>
  </div>
  )
}

export default HighScores
