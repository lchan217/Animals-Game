import React from "react";
import { connect } from "react-redux";
import {
  nursingToWild,
  endangeredToNursing,
  nurse
} from "../../actions/animalActions.js";
import { Card, Progress, Image, Button } from "semantic-ui-react";
import "../../css/AnimalCard.css";

const AnimalCard = ({
  status,
  health,
  id,
  img,
  category,
  name,
  nursingToWild,
  endangeredToNursing,
  nurse
}) => {
  return (
    <Card className='animal-card'>
      <Image
        className='animal-card-image'
        src={img}
        alt={`${category}`}
      ></Image>

      <Card.Content>
        <div className='header'>{name}</div>
      </Card.Content>
      <Card.Description>
        Health: {health}
        <Progress indicating percent={health * 20} id='healthBar'></Progress>
        Status: {status}
      </Card.Description>
      <Button.Group>
        <Button onClick={() => endangeredToNursing(id)}>Capture</Button>
        <Button onClick={() => nurse(id)}>Nurse</Button>
        <Button onClick={() => nursingToWild(id)}>Release</Button>
      </Button.Group>
    </Card>
  );
};

export default connect(null, { nursingToWild, endangeredToNursing, nurse })(
  AnimalCard
);
