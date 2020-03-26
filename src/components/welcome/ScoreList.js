import React from "react";
import { Item } from "semantic-ui-react";
import "../../css/ScoreList.css";

const ScoreList = ({ name, age, occupation, score, created_at }) => {
  return (
    <Item>
      <Item.Content className='score-content'>
        <Item.Header>
          {name} | Score: {score} <br />
        </Item.Header>
        <Item.Description>Date: {created_at}</Item.Description>
      </Item.Content>
    </Item>
  );
};

export default ScoreList;
