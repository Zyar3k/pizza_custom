import React from 'react';
import './Header.css';
import Logo from "../../assets/pizza logo.png";


export default function Header() {
  return (
    <div className='header'>
      <div className='headerContent'>
        <img className='logo' src={Logo} alt="pizzalogo" />
        <div className='logoTitle'>Pizza Customization</div>
      </div>
    </div>
  )
}