import React, { Component } from 'react';
import Select from 'react-select';

import ArticleList from './components/Article/ArticleList';
import UserForm from './components/UserForm/UserForm';
import { articles } from './mock/fixtures';

class App extends Component {
  state = {
    selection: null
  };

  changeSelection = (selection) => {
    this.setState({
      selection
    });
  };

  render() {
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return (
      <div className="container">
        <UserForm/>
        <Select options={options}
                className="app-select"
                value={this.state.selection}
                isMulti
                onChange={this.changeSelection}/>
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
