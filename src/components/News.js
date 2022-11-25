import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

//   jokeBtn.addEventListener("click", generateJoke);
//   async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   const res = await fetch("https://icanhazdadjoke.com", config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }


export default function News() {
  // const options = {
    //   method: 'GET',
    //   headers: {
      //     'X-RapidAPI-Key': '1c4d7492a0msh14ac9b1a80f7bf6p1397d7jsn5c1c398f8857',
      //     'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
      //   }
      // };
      
      // fetch('https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F17%2F21224728%2Fbill-gates-coronavirus-lies-5g-covid-19', options)
      //   .then(response => response.json())
      //   .then(response => setItems(response.data))
      //   .catch(err => console.error(err));
      
      const [items, setItems] = useState(null);
      const updateItems = async () => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '1c4d7492a0msh14ac9b1a80f7bf6p1397d7jsn5c1c398f8857',
    //     'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
    //   }
    // };
    const url = 'https://newsdata.io/api/1/news?apikey=pub_138722b4baa33d88a74e6a0587cece5ce4939';
    let data = await fetch(url)
    let parseData = await data.json()

    setItems(parseData)
  }
  
  useEffect(() => {
    updateItems();
  }, [])
  
  return (
    <div className='container mx-auto'>
      <h2>DailyNews - Top Headlines</h2>
      {items.map((element) => {
        return <div className='grid grid-cols-3 gap-6'>
          <div className=''>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,85)} imageUrl={element.image_url} newsUrl="element.link" />
          </div>
        </div>

      })}
    </div>
  )
}
