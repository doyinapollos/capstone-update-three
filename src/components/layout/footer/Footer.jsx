import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-div">
            <div className="footer--div--1">
                <ul className='footer--div--ul--1'>
                    <li className='footer--list--category'>Categories</li>
                    <li className='footer--list'>Cleaning</li>
                    <li className='footer--list'>Loundry</li>
                    <li className='footer--list'>Car repair</li>
                    <li className='footer--list'>Barbing</li>
                    <li className='footer--list'>Hair dressing</li>
                    <li className='footer--list'>Make up</li>
                    <li className='footer--list'>Capentry</li>
                </ul>
                <ul className='footer--div--ul--2'>
                    <li className='footer--list'>Tailoring</li>
                    <li className='footer--list'>Landscape</li>
                    <li className='footer--list'>Plumbing</li>
                    <li className='footer--list'>Electician</li>
                    <li className='footer--list'>Generator repair</li>
                    <li className='footer--list'>Cooking</li>
                    
                </ul>
                <ul className='footer--div--ul--3'>
                    <li className='footer--list--access'>Access</li>
                    <li className='footer--list'>Log in</li>
                    <li className='footer--list'>Join us</li>
                    <li className='footer--list'>Log in as specialist</li>
                    <li className='footer--list'>Become a specialist</li>
                    
                </ul>

            </div>
            <div className="footer--div--2">
                <div className='footer--div--2--a'>
                    <span className='footer--savis'>S a v i s</span>
                    <span className='footer--allrights--reserved'>@All rights reserved 2022</span>

                </div>
                <div className='footer--div--2--b'>
                    <span className='footer--span'>@facebook</span>
                    <span className='footer--span'>@twitter</span>
                    <span className='footer--span'>@instagram</span>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer