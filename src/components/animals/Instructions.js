import React from 'react';

const Instructions = (props) => {
  return (
    <div className="instructions">
      <h2>Save the animals!</h2>
      <p>You have 15 animals who are at risk of becoming extinct. Find and capture
      the animals below and nurse them back to health. Once they have 5 health points,
      they are ready to be released back into the wild. Good luck!</p>
    <h2>Animals To Save</h2>
    {props.selected.map(animal => <li>{animal.name}</li>)}

    </div>

  );
};

export default Instructions;
