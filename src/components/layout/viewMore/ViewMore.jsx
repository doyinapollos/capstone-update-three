import React from 'react'
import "./ViewMore.css"
import {Link} from "react-router-dom"

function ViewMore() {
  return (
    <div className='view--more'>
        <div className="view--more--div">
            <button className='view--more--btn'><Link to="/profiles"> View more </Link></button>
        </div>

    </div>
  )
}

export default ViewMore