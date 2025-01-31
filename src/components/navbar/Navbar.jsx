import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/asset.svg'
import '../../../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

const Menu = () => (
  <>
    <p>
      <a href='#home'><p><i className='fi fi-sr-home'></i>Home</p></a>
    </p>
    <p>
      <a href='#about'><p><i className="fi fi-sr-users"></i>About us</p></a>
    </p>
    <p>
      <a href='#services'><p><i className="fi fi-sr-box"></i>Services</p></a>
    </p>
    <p>
      <a href="#pricing"><p><i className='fi fi-sr-credit-card'></i>Pricing & Plans</p></a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} width={"100px"} height={'100px'} alt='logo' />
        </div>
      </div>
      <div className='gpt3__navbar-links_container'>
        <Menu />
      </div>
      <div className='gpt3__navbar-sign'>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}{' '}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container'></div>
            <Menu />
            <div className='gpt3__navbar-menu_container-links-sign'>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
