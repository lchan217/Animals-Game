import React from "react";
import { Item } from "semantic-ui-react";
import "../../css/ScoreList.css";
import Moment from "react-moment";

const ScoreList = ({ name, age, occupation, score, created_at }) => {
  return (
    <Item>
      <Item.Content className='score-content'>
        <Item.Header>
          {name} | Score: {score} <br />
        </Item.Header>
        <Item.Description>
          <Moment date={created_at} format='l' />
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default ScoreList;
