import React from "react";
import "./App.css";
import "./Bag.css";
import "./Button.css";

import SearchPhotos from "./searchPhotos";

function App() {
  return (
    <>
      <div class="bg">
        <div class="bg bg2">
          <div class="bg bg3"></div>
        </div>
      </div>
      <div class="bars" id="nav-action">
        <a href="http://piyush-mahajan.netlify.app/">
          <span class="bar"> </span>
        </a>
      </div>
      <div className="App">
        <div className="container">
          <div className="abonpho">
            <h1 className="title">PiyuPix</h1>
          </div>
          <h6 className="description">
            Beautiful, free images and photos that you can download and use for
            any project. Better than any royalty free or stock photos. Made By
            Piyush Mahajan
          </h6>
          <SearchPhotos />
        </div>
      </div>
    </>
  );
}
export default App;
