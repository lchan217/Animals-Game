import React from 'react';
import { Card } from 'semantic-ui-react'

const UserCard = ({name, age, occupation, score}) => {
return (
  <div className="userCard">
    <div class="ui cards">
      <Card>
        <div class="content">
          <div class="header">
            {name}
          </div>
          <div class="meta">
            Age: {age}
          </div>
          <div class="meta">
            Occupation: {occupation}
          </div>
          <div class="description">
            <b>Score: {score}</b>
          </div>
        </div>
      </Card>
    </div>
  </div>
  )
}

export default UserCard
