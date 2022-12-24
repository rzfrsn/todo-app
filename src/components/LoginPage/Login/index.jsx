import React from 'react';
import OutlinedButton from '../../OutlinedButton';

import './Login.scss';

function Login() {
  return (
    <div className='login'>
      <div className="title">Se connecter avec : </div>
      
      <div className="btn-connexion">
        <OutlinedButton label="Connexion Google" prependIcon="fa-brands fa-google"></OutlinedButton>
      </div>

      <div className="btn-connexion">
        <OutlinedButton label="Connexion Facebook" prependIcon="fa-brands fa-facebook-f"></OutlinedButton>
      </div>
    </div>
  )
}

export default Login;