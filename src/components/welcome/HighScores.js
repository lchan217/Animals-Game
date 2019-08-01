import React from 'react';
const HighScores = ({name, age, occupation, score, index}) =>
 {
return (
  <div className="highScores">
    <p>Name: {name} | Score: {score} seconds </p>
  </div>
  )
}

export default HighScores
