import React, { Component } from "react";

import ArticleList from "./components/Article/ArticleList";
import UserForm from "./components/UserForm/UserForm";
import Counter from "./components/Counter";

import { articles } from "./mock/fixtures";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
        <UserForm articles={articles} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
