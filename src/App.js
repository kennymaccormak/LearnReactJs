import React, { Component } from 'react';
import ArticleList from './components/Article/ArticleList';
import {articles} from './mock/fixtures';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
