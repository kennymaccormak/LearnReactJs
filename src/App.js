import React, { Component } from 'react';
import ArticleList from './components/Article/ArticleList';
import UserForm from './components/UserForm/UserForm';
import {articles} from './mock/fixtures';

class App extends Component {

  render() {
    return (
      <div className="container">
        <UserForm/>
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
