import React, { Component } from 'react';

import ArticleList from './components/Article/ArticleList';
import UserForm from './components/UserForm/UserForm';
import { articles } from './mock/fixtures';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserForm articles={articles} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
