import React from 'react';
import { Card } from 'semantic-ui-react'

const UserCard = ({name, age, occupation, score}) => {
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
        </div>
      </Card>
    </div>
  </div>
  )
}

export default UserCard
