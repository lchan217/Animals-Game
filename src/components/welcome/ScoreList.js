import React from "react";

const ScoreList = ({ name, age, occupation, score, created_at }) => {
  return (
    <div className='score'>
      <li>{name}</li>
    </div>
  );
};

export default ScoreList;
