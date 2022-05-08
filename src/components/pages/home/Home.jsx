import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import Card from '../../card/Card';
import Main from '../../layout/main/Main';
import MostUsedServices from '../../layout/mostUsedServices/MostUsedServices';
import ViewMore from '../../layout/viewMore/ViewMore';
import MainBottom from '../../layout/mainBottom/MainBottom';
import Footer from '../../layout/footer/Footer';

/*
"http://localhost:8000/elements"
*/ 

function Home() {
const [displayCards, setDisplayCards] = useState([]);
const [isloading, setIsLoading] = useState([])

const getDisplayCard = async () => {
    setIsLoading(true);
  const response = await axios.get(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=WG3PtPORs4EQFZAhgaAxNKx1VRnxtGiX"
    
    )
  .catch((err) => {
      console.log(err)
  })
  if(response) {
    setIsLoading(false)
    console.log(response.data.results.books)
    setDisplayCards(response.data.results.books)
  }
}

useEffect(() => {
   getDisplayCard()
}, []);

/*const someCards = displayCards.filter(function(a) {
      if (a.id < 7) {
        return a 
      }
                   
})*/

const getCards = displayCards.map(c => {
       
       return (
       
        <Card 
             id = {c.id}
             image = {c.book_image}
             title = {c.title}
             publisher = {c.publisher}
             price = {c.price}
             author = {c.author}
             description = {c.description}
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