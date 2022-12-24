import React from 'react'
import './card.scss';

function Card() {
  return (
    <div className='card'>
      <img className='card-img' src="/src/assets/img/tafita_raza.jpg" alt="image du createur de ToDo App"  />

      <div className="card-content">
        <div className="card-content-title">Mot du Créateur</div>
        <div className="card-content-description">
          J’ai créé ToDo App dans le but de gérer mes tâches  quotidiens à travers une application  web. 
          Maintenant, je l’ai mis à la disposition de tous. Enjoy it!
        </div>
        <div className="card-content-signature">Tafita Raza</div>
      </div>
    </div>
  )
}

export default Card;