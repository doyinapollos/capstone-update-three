import React, { useState } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import {BiSearchAlt2} from "react-icons/bi"


function Header() {

 const [mobileMenu, setMobileMenu] = useState(false);

 const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
 }

  return (
    <div className='header'>
        <div className={mobileMenu ? 'nav--bar mobile--nav--bar--color' : 'nav--bar'}>
            
            <div className="nav--bar--logo--div">
                <h1><Link to="/"> sAVIs </Link></h1>
            </div>

            <div className='input--div'>
                <input className='input' type="text" placeholder='Search'/>
                <BiSearchAlt2 className='search--icon' />
            </div>

            
            <div className="nav--bar--ul--div">
                <ul className='nav--bar--ul'>
                <li className='list'><Link to="/"> Home </Link></li>
                    <li className='list ' ><Link to="/specialist"> Specialist Portal </Link></li>
                    <li className='list'><Link to="/register"> Registar </Link></li>
                    <li className='list'><Link to="/sign-in"> Sign in </Link></li>
                    <li className='list'><Link to="/admin"> Admin portal </Link></li>

                </ul>
            </div>

            <div className='hamburger--icon--div' onClick={mobileMenuToggle}>
                 <GiHamburgerMenu />
            </div>

            <div className={mobileMenu ? 'mobile--nav--bar active' : 'mobile--nav--bar'}>
                 <ul className='mobile--ul'>
                 <li className='mobile--list' ><Link to="/"> Specialist Portal </Link></li>
                    <li className='mobile--list'><Link to="/register"> Registar </Link></li>
                    <li className='mobile--list'><Link to="/sign-in"> Sign in </Link></li>
                    <li className='mobile--list'><Link to="/admin"> Admin portal </Link></li>

                 </ul>
            </div>

        </div>

    </div>
  )
}

export default Header