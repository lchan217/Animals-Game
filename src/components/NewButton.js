import React from "react";
import { Button } from "semantic-ui-react";

const NewButton = () => {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = "/form";
        }}
        color='red'
        size='mini'
        className='alert-new-game'
      >
        New Game
      </Button>
    </div>
  );
};

export default NewButton;
