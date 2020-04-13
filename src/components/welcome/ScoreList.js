import React from "react";
import "../../css/ScoreList.css";
import Moment from "react-moment";

const ScoreList = ({ rank, name, age, occupation, score, created_at }) => {
  return (
    <div className='score-card'>
      <div className='score-content'>
        {rank + 1}. {name} | Score: {score}
      </div>
      <div className='score-date'>
        {" "}
        Date: <Moment date={created_at} format='l' />
        <br />
        Occupation: {occupation}
        <br />
        Age: {age}
      </div>
    </div>
  );
};

export default ScoreList;
