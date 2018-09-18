import React, { Component } from 'react';
import Select from 'react-select';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';

import ArticleList from './components/Article/ArticleList';
import UserForm from './components/UserForm/UserForm';
import { articles } from './mock/fixtures';

class App extends Component {
  state = {
    selection: null,
    from: new Date(),
    to: new Date()
  };

  changeSelection = selection => {
    this.setState({
      selection
    });
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  render() {
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const dayRange = (from && to) ? <p>from: {from.toLocaleDateString()}, to: {to.toLocaleDateString()}</p> : <p>Select date range</p>;

    return (
      <div className="container">
        <DayPicker
          className="range-picker"
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        {dayRange}
        <UserForm />
        <Select
          options={options}
          className="app-select"
          value={this.state.selection}
          isMulti
          onChange={this.changeSelection}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
