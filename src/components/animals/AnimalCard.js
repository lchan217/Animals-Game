import React from 'react';

const AnimalCard = ({animal}) =>
<div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src={animal.img} alt={`${animal.name}'s picture`} />
   </div>
     <div class="content">
       <div class="header">{animal.name}</div>
        <div class="description">
          Health: {animal.health} <br/> Status: {animal.status}
        </div>
     </div>
  </div>
</div>


export default AnimalCard
