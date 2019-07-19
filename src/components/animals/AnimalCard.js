import React from 'react';
import { connect } from 'react-redux';
import {breedingToWild, endangeredToBreeding, nurse} from '../../actions/animalActions.js'
import { Card, Progress } from 'semantic-ui-react'

const AnimalCard = ({status, health, id, img, category, name, breedingToWild, endangeredToBreeding, nurse}) => {
return (

<div className="card">
  <Card>
    <div className="image">
        <img src={img} alt={`${category}`} style={{width: 250, height: 300}}/>
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="description">
        Health: {health}
        <Progress percent={health*20}  id="healthBar">
        </Progress>
      Status: {status}
    </div>
    <div className="ui three buttons">
      <div className="ui button" onClick={() => endangeredToBreeding(id)}>Capture</div>
      <div className="ui button" id="nurse" onClick={() => nurse(id)}>Nurse</div>
      <div className="ui button" onClick={() => breedingToWild(id)}>Release</div>
    </div>
  </Card>
</div>
)}

const mapDispatchToProps = dispatch => {
  return {
    breedingToWild: (id) => dispatch(breedingToWild(id)),
    endangeredToBreeding: (id) => dispatch(endangeredToBreeding(id)),
    nurse: (id) => dispatch(nurse(id))
  }
}

export default connect(null, mapDispatchToProps)(AnimalCard)
