import React from 'react';

const Instructions = (props) => {

  return (
    <div className="instructions">
      <h1>Save the animals!</h1>
      <p>There are 15 animals who are at risk of becoming extinct. Unfortunately, only
        three can be saved per session. Capture today's animals (below) and nurse them back to health.
        Once they have 5 health points,they are ready to be released back into the wild. Good luck!</p>

    <h2>Today's Animals To Save</h2>
    <ol>
      {props.selected.map((animal, key) => <li key={key}>{animal.name}</li>)}
    </ol>
    </div>
  );
};

export default Instructions;
