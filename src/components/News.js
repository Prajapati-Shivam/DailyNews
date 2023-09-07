import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import altImage from "../assests/altImage.jpg";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
    console.log("update!");
  };

  document.title = `Daily News - ${capitalizeFirstLetter(props.category)} news`;
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [props.category]);

  return (
    <div className="container my-[5em] mx-auto">
      {loading && <Spinner />}
      <div className="container flex flex-wrap align-center justify-center gap-10 news-container">
        {articles.map((element) => {
          return (
            <div key={element.link}>
              <NewsItem
                imageUrl={element.image_url ? element.image_url : altImage}
                title={element.title}
                description={element.description}
                date={element.pubDate}
                newsUrl={element.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "top",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
