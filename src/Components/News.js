import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [newsArticles, setNewsArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setIsLoading(true);
    const response = await fetch(
      `https://newsapi-53g5.onrender.com/${props.category}`
    );
    props.setProgress(30);
    const data = await response.json();
    props.setProgress(50);
    setNewsArticles(data.articles);
    setTotalResults(data.totalResults);
    setIsLoading(false);
    props.setProgress(100);
  };

  /*`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`*/

  useEffect(() => {
    document.title = `News Pool- ${capitalizeFirstLetter(props.category)} news`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let response = await fetch(
      `https://newsapi-53g5.onrender.com/${props.category}`
    );
    setPage(page + 1);

    let data = await response.json();

    setNewsArticles(newsArticles.concat(data.articles));
    setTotalResults(data.totalResults);
  };
  return (
    <>
      <h2 style={{ margin: "120px 0 30px 0" }}>
        News Pool - Top{" "}
        {props.category === "general"
          ? ""
          : capitalizeFirstLetter(props.category)}{" "}
        Headlines .
      </h2>
      {isLoading && <Spinner />}
      <InfiniteScroll
        dataLength={newsArticles.length}
        next={fetchMoreData}
        hasMore={newsArticles.length !== totalResults}
        loader={
          page > Math.ceil(totalResults / props.pageSize) ? (
            "all updated"
          ) : (
            <Spinner />
          )
        }
      >
        <div className="container">
          <div className="row ">
            {newsArticles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={
                      element.author ? element.author : element.source.name
                    }
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
