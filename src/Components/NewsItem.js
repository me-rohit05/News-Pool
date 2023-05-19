import React from "react";

function NewsItem(props) {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div className="d-flex " style={{ right: "0", position: "absolute" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://thumbs.dreamstime.com/b/international-newspaper-stand-displaying-headlines-publications-around-world-london-united-kingdom-april-newspaper-196258700.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>

          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite title="Source Title">
                <small className="text-body-secondary">By {author}</small>
              </cite>
              <p className="card-text">
                <small className="text-body-secondary">
                  on {new Date(date).toGMTString()}
                </small>
              </p>
            </footer>
          </blockquote>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-success"
          >
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
