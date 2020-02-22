import React from "react";
import "../css/Instructions.css";
import { Button } from "semantic-ui-react";

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
          into the wild. Your timer will start immediately. Don't forget to
          record your score afterwards, maybe you will be an expert! Good luck!
        </p>
        <Button
          onClick={() => {
            window.location.href = "/animals";
          }}
          className='new-game-button center'
        >
          New Game
        </Button>
      </div>
    </div>
  );
};

export default Instructions;
