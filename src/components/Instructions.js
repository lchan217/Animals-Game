import React from 'react';

const Instructions = (props) => {
  const background = {
    width: '100%',
    height: '800px',
    backgroundImage: "url(" + "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" + ")" ,
    backgroundSize: 'cover'
  };

  const text ={
    color: 'white',
    padding: '120px',
    fontSize: 25
  }

  return (
    <div className="instructions" style={background}>
      <div style={text}>
        <h1>Save the animals!</h1>
        <p>There are 15 animals who are at risk of becoming extinct. Unfortunately, only
            three can be saved per session. Capture three animals today and nurse them back to health.
            Once they have 5 health points, they are ready to be released back into the wild. Your timer
            will start when you navigate to "All Animals." Don't forget to record your score afterwards and
            good luck!
        </p>
      </div>
    </div>
  );
};

export default Instructions;
