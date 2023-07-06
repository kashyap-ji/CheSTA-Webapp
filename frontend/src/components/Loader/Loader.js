import React from 'react';
import IITGLogo from '../Images/Logos/IITGLogo.png';
import './Loader.css';

const Loader = () => {
  return (
    <div className='LoadingPage' >
        <img className='loader-Logo' src={IITGLogo} alt="" />
      <span class="loader">
          <span class="loader-inner">
          </span>
      </span>
      <div className="loadingtext">
        Hold on tight while we fetch the details ...
      </div>
    </div>
  )
}

export default Loader;