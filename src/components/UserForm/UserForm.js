import React, { Component } from "react";

import Select from "react-select";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

export default class UserForm extends Component {
  state = {
    username: "",
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

  handleUserChange = ev => {
    if (ev.target.value.length > 10) return;
    this.setState({
      username: ev.target.value
    });
  };

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const dayRange =
      from && to ? (
        <p>
          from: {from.toLocaleDateString()}, to: {to.toLocaleDateString()}
        </p>
      ) : (
        <p>Select date range</p>
      );
    return (
      <div>
        <DayPicker
          className="range-picker"
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        {dayRange}
        Name:{" "}
        <input
          type="text"
          className="form-control"
          value={this.state.username}
          onChange={this.handleUserChange}
        />
        <Select
          options={options}
          className="app-select"
          value={this.state.selection}
          isMulti
          onChange={this.changeSelection}
        />
      </div>
    );
  }
}
