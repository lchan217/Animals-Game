import React from "react";
import { Button } from "semantic-ui-react";
import "../css/NewButton.css";

const NewButton = () => {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = "/form";
        }}
        color='red'
        className='new-button'
      >
        New Game
      </Button>
    </div>
  );
};

export default NewButton;
