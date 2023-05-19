import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Popup from "./Components/Popup";

function App() {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <Popup id="subscribe" heading="Subscribe now!" button="Pay now" />
      <Popup id="login" heading="Welcome Back!!!" button="Log-in" />

      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={"in"}
                category="general"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={"in"}
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={"in"}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={"in"}
                category="health"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={"in"}
                category="science"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={"in"}
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={"in"}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/bbc-news"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="bbc-news"
                pageSize={pageSize}
                country={"in"}
                category="bbc-news"
              />
            }
          />
          <Route
            exact
            path="/fox-news"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="fox-news"
                pageSize={pageSize}
                country={"in"}
                category="fox-news"
              />
            }
          />
          <Route
            exact
            path="/google-news"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="google-news"
                pageSize={pageSize}
                country={"in"}
                category="google-news"
              />
            }
          />
          <Route
            exact
            path="/world-wide"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="world-wide"
                pageSize={pageSize}
                country={"in"}
                category="world-wide"
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About setProgress={setProgress} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
