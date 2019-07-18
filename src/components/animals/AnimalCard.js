import React from 'react';

const AnimalCard = ({animal}) =>
<div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src={animal.img} alt={`${animal.name}'s picture`} />
   </div>
  </div>
</div>


export default AnimalCard
