import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment">
        <h4>{this.props.comment.user}</h4>
        <div>{this.props.comment.text}</div>
      </div>
    );
  }
}