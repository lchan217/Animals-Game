import React from 'react';
import { Card } from 'semantic-ui-react'

const UserCard = ({name, age, occupation, score, created_at}) => {
return (
  <div className="userCard">
    <div class="ui cards">
      <Card>
        <div className="content">
          <div className="header">
            {name}
          </div>
          <div className="meta">
            Age: {age}
          </div>
          <div className="meta">
            Occupation: {occupation}
          </div>
          <div className="description">
            <b>Score: {score}</b>
          </div>
          <div className="date">
            <b>Date: {created_at.slice(0,10)}</b>
          </div>
        </div>
      </Card>
    </div>
  </div>
  )
}

export default UserCard
