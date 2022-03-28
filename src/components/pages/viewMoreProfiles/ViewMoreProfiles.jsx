import React, {useState, useEffect} from 'react';
import "./ViewMoreProfiles.css"
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import axios from 'axios'
import Card from '../../card/Card';


function ViewMoreProfiles() {

  const [allCards, setAllCards] = useState([]);
  const [isPending, setIsPending] = useState([])

const getAllCard = async () => {
  setIsPending(true)
  const response = await axios.get(
    "http://localhost:8000/elements"
    )
  .catch((err) => {
      console.log(err)
  })
  if(response) {
    setIsPending(false)
    console.log(response.data)
    setAllCards(response.data)
  }
}

useEffect(() => {
   getAllCard()
}, []);

const displayAllCards = allCards.map(v => {
     return (
      <Card 
      key = {v.id}
      image = {v.image}
      title = {v.title}
      rating = {v.rating}
      price = {v.price}
      specialist = {v.specialist}
      specialistPhoto = {v.specialistPhoto}
 />
     )
})

  return (
    <div className='viewMoreProfiles'>
      <Header />
        <div className="viewMoreProfiles--div">
        {isPending && <p>Loading...</p>}
            {displayAllCards ? displayAllCards : "" }
        </div>
      <Footer />
    </div>
  )
}

export default ViewMoreProfiles