import React from 'react'
//import "../card/Card.css"
import "./Card.css"
import {FiStar} from "react-icons/fi"

function Card(props) {
  const {id, image, title, publisher, price, author, description} = props;

  return (
    <div className='card'>
        <div className="card--div">
            <div className="card--img--div">
                <img className='card--img' src={image} alt='' />
            </div>
            <div className="card--title--div">
                <span className='card--title'><strong> Title:</strong> {title}</span>
                <div className='specialist--photo--div'><strong> Discription:</strong> {description}</div>
                <span className='card--name'><strong> Author:</strong> {author}</span>
            </div>
            <div className="card--specialist--div">
                
            </div>
            <div className="card--bottom--div">
                <span className='card--rating'> <FiStar className='star' /><strong> Publisher:</strong> {publisher}</span> <br />
                <span className='card--price'><span className='starting-at'></span> N{price}</span>

            </div>
  </div> 

    </div>
  )
}

export default Card