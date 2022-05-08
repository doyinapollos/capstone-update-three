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
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=WG3PtPORs4EQFZAhgaAxNKx1VRnxtGiX"
    )
  .catch((err) => {
      console.log(err)
  })
  if(response) {
    setIsPending(false)
    console.log(response.data.results.books)
    setAllCards(response.data.results.books)
  }
}

useEffect(() => {
   getAllCard()
}, []);

const displayAllCards = allCards.map(v => {
     return (
      <Card 
      key = {v.id}
      image = {v.book_image}
      title = {v.title}
      publisher = {v.publisher}
      price = {v.price}
      author = {v.author}
      description = {v.description }
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