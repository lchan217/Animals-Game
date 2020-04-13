import React from "react";
import "../css/Instructions.css";
import NewButton from "../components/NewButton";

const Instructions = () => {
  return (
    <div className='instructions-background'>
      <div className='instructions'>
        <h1 className='instructions-title'>Save the Animals!</h1>
        <p>
          There are 15 animals who are at risk of becoming extinct.
          Unfortunately, only three can be saved per game. Capture the three
          animals listed at the top of the page and nurse them back to health.
          Once they have 5 health points, they are ready to be released back
          into the wild. Your timer will start immediately. Good luck!
        </p>
        <div className='intro-button'>
          <NewButton />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
