import React from 'react';

const ThreeRandom = (props) => {
  return (
    <div className="threeRandom">
    <h2>Animals To Save</h2>
    <ol>
      {props.selected.map((animal, key) => <li key={key}>{animal.name}</li>)}
    </ol>
    </div>
  );
};

export default ThreeRandom;
