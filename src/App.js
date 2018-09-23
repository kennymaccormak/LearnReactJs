import React, { Component } from "react";

import ArticleList from "./components/Article/ArticleList";
import Filters from "./components/Filters/";
import Counter from "./components/Counter";

// import { articles } from "./mock/fixtures";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
        <Filters />
        <ArticleList />
      </div>
    );
  }
}

export default App;
