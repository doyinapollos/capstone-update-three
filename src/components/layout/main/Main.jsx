import React from 'react'
import "./Main.css"
import Header from '../header/Header'
import {Link} from "react-router-dom"

function Main() {
  return (
    <div className='main'>
        <div className='main--div--1'>
            <Header />
            <div className="main--div--2">
                <div className="main--div--aside--left">

                    <div className='main--div--aside--left--div'>
                        <h1 className='main--h1'>S A V I S</h1>
                        <span className='main--span'>Find the right epecialist</span>
                        <span className='main--span'>For the right JOB</span>
                        <button className='main--btn'><Link to="/register"> Join now </Link></button>
                    </div>

                </div>
                <div className="main--div--aside--right">
                    <div className='main--div--aside--right--div'>
                        <img className='main--right--image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAKGL0dcqQj_HDiuxzMk2doSLwShLZm3iJQ&usqp=CAU' alt='' />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main