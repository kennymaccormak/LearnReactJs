import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="comment list-group-item list-group-item-action list-group-item-secondary">
        <h4>{this.props.comment.user}</h4>
        <div>{this.props.comment.text}</div>
      </li>
    );
  }
}