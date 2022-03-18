import React from 'react';
import "./styles.css";
import bars from '../../../images/loader.svg'
const Loader = () => {
  return (
    <div className='cryptoverse__loader-container'>
        <img src={bars} alt="Loader GIF" />
    </div>
  )
}

export default Loader;