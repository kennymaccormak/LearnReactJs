import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { changeSelection } from '../../AC';
import {mapToArr} from '../../helpers'

class SelectFilter extends Component {
  handleChange = selected =>
    this.props.changeSelection(selected.map(option => option.value));

  render() {
    const { articles, selected } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        className="app-select"
        options={options}
        isMulti={true}
        onChange={this.handleChange}
      />
    );
  }
}

export default connect(
  state => ({
    selected: state.filters.selected,
    articles: mapToArr(state.articles)
  }),
  { changeSelection }
)(SelectFilter);
