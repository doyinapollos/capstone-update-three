import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import Card from '../../card/Card';
import Main from '../../layout/main/Main';
import MostUsedServices from '../../layout/mostUsedServices/MostUsedServices';
import ViewMore from '../../layout/viewMore/ViewMore';
import MainBottom from '../../layout/mainBottom/MainBottom';
import Footer from '../../layout/footer/Footer';

function Home() {
const [displayCards, setDisplayCards] = useState([]);
const [isloading, setIsLoading] = useState([])

const getDisplayCard = async () => {
    setIsLoading(true);
  const response = await axios.get(
    "http://localhost:8000/elements"
    )
  .catch((err) => {
      console.log(err)
  })
  if(response) {
    setIsLoading(false)
    console.log(response.data)
    setDisplayCards(response.data)
  }
}

useEffect(() => {
   getDisplayCard()
}, []);

const someCards = displayCards.filter(function(a) {
      if (a.id < 5) {
        return a
      }
})

const getCards = someCards.map(c => {
       
       return (
       
        <Card 
             key = {c.id}
             image = {c.image}
             title = {c.title}
             rating = {c.rating}
             price = {c.price}
             specialist = {c.specialist}
             specialistPhoto = {c.specialistPhoto}
        />
       
       )
})

  return (
    <div className='home'>
      
      <Main />
      <MostUsedServices />
      <div className='home--div'>
        {isloading && <p>Loading...</p>}
        { getCards ? getCards: "" }
      </div>
      <ViewMore />
      <MainBottom />
      <Footer />

    </div>
  )
}

export default Home