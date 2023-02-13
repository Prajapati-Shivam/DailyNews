import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsdata.io/api/1/news?apikey=pub_138722b4baa33d88a74e6a0587cece5ce4939&language=En&country=${props.country}&category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.results);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `Daily News - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
  },)

  return (
    <div className='container my-[6em] mx-auto'>
      {loading && <Spinner />}
      <div className='container flex flex-wrap align-center justify-center gap-10 news-container'>
        {articles.map((element) => {
          return <div key={element.link}>
            <NewsItem
              imageUrl={!element.image_url ? "https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA=" : element.image_url}
              title={element.title ? element.title.slice(0, 50) + "..." : ""}
              description={element.description ? element.description.slice(0, 100) + "..." : ""}
              date={element.pubDate}
              newsUrl={element.link} />
          </div>
        })}
      </div>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'top',
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News