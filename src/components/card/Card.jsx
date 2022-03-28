import React from 'react'
//import "../card/Card.css"
import "./Card.css"
import {FiStar} from "react-icons/fi"

function Card(props) {
  const {id, image, title, rating, price, specialistPhoto, specialist} = props;

  return (
    <div className='card' >
        <div className="card--div">
            <div className="card--img--div">
                <img className='card--img' src={image} alt='' />
            </div>
            <div className="card--title--div">
                <span className='card--title'>{title}</span>
            </div>
            <div className="card--specialist--div">
                <div className='specialist--photo--div'><img className='specialist--photo' src={specialistPhoto} alt='' /></div>
                <span className='card--name'>{specialist.name}</span>
            </div>
            <div className="card--bottom--div">
                <span className='card--rating'> <FiStar className='star' /> {rating}</span> <br />
                <span className='card--price'><span className='starting-at'>Starting at</span> N{price}</span>

            </div>
  </div> 

    </div>
  )
}

export default Card