import React from "react";
import "./css/Instructions.css";

const Instructions = () => {
  return (
    <div className='instructions-background'>
      <div className='instructions'>
        <h1 className='instructions-title'>Save the Animals!</h1>
        <p>
          There are 15 animals who are at risk of becoming extinct.
          Unfortunately, only three can be saved per session. Capture three
          animals today and nurse them back to health. Once they have 5 health
          points, they are ready to be released back into the wild. Your timer
          will start when you navigate to "All Animals." Don't forget to record
          your score afterwards and good luck!
        </p>
      </div>
    </div>
  );
};

export default Instructions;
