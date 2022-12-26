import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <div className='navbar'>
      <div className="title">ToDo App</div>
      <div className="profil">
        <img className='profil-img' src="/src/assets/img/tafita_raza.jpg" alt="tafita raza profil pic" />
        <div className='profil-name'>Tafita Raza</div>
      </div>
    </div>
  )
}

export default NavBar;