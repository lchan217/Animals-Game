import React from "react";
import { connect } from "react-redux";
import {
  nursingToWild,
  endangeredToNursing,
  nurse
} from "../../actions/animalActions.js";
import { Card, Progress, Image, Button } from "semantic-ui-react";

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
    <Card>
      <Image
        src={img}
        alt={`${category}`}
        style={{ width: 250, height: 300 }}
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
