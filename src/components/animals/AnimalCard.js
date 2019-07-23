import React from 'react';
import { connect } from 'react-redux';
import {nursingToWild, endangeredToNursing, nurse} from '../../actions/animalActions.js'
import { Card, Progress } from 'semantic-ui-react'

const AnimalCard = ({status, health, id, img, category, name, nursingToWild, endangeredToNursing, nurse}) => {
return (

<div className="animalCard">
  <Card>
    <div className="image">
        <img src={img} alt={`${category}`} style={{width: 250, height: 300}}/>
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="description">
        Health: {health}
        <Progress indicating percent={health*20}  id="healthBar">
        </Progress>
      Status: {status}
    </div>
    <div className="ui three buttons">
      <div className="ui button" onClick={() => endangeredToNursing(id)}>Capture</div>
      <div className="ui button" id="nurse" onClick={() => nurse(id)}>Nurse</div>
      <div className="ui button" onClick={() => nursingToWild(id)}>Release</div>
    </div>
  </Card>
</div>
)}

export default connect(null,
  {nursingToWild, endangeredToNursing, nurse})(AnimalCard)
