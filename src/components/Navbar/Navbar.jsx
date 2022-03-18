import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
import { HomeIcon,CurrencyPoundIcon,NewspaperIcon,ChartBarIcon,MenuAlt3Icon,XIcon } from '@heroicons/react/solid';
import './styles.css';


const MenuItems = () => {
  return (
    <>
      <div className='cryptoverse__container-links-container__link group'>
        <HomeIcon className='cryptoverse__container-links-container__link__icon' />
        <Link className='cryptoverse__container-links-container__link__text' to="/">Home</Link>
      </div>
      <div className='cryptoverse__container-links-container__link group'>
        <CurrencyPoundIcon className='cryptoverse__container-links-container__link__icon' />
        <Link className='cryptoverse__container-links-container__link__text' to="/cryptocurrencies">Cryptocurrencies</Link>
      </div>
      {/* <div className='cryptoverse__container-links-container__link group'>
        <ChartBarIcon className='cryptoverse__container-links-container__link__icon' />
        <Link className='cryptoverse__container-links-container__link__text' to="/exchanges">Exchanges</Link>
      </div> */}
      <div className='cryptoverse__container-links-container__link group'>
        <NewspaperIcon className='cryptoverse__container-links-container__link__icon' />
        <Link className='cryptoverse__container-links-container__link__text' to="/news">News</Link>
      </div>
    </>
  );
}

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='cryptoverse__container'>
        <Link to="/">
          <div className='cryptoverse__container-brand'>
              <img src={logo} alt="Cryptoverse Logo" />
              <h1 className='unique-text hidden md:block'>Cryptoverse</h1>
          </div>
        </Link>
        <div className='cryptoverse__container-links-container'>
          <MenuItems />
        </div>
        <div className='cryptoverse__container-menu'>
          <button className='cryptoverse__container-menu-button' onClick={() => setToggleMenu(!toggleMenu)}>
            {
              !toggleMenu ? <MenuAlt3Icon className='cryptoverse__container-menu-button-icon' /> : <XIcon className='cryptoverse__container-menu-button-icon' />
            }
          </button>
          {
            toggleMenu && (
              <div className='cryptoverse__container-mobile-links-container scale-up-center'>
                  <MenuItems />
              </div>
            )
          }
        </div>
        
    </div>
  )
}

export default Navbar