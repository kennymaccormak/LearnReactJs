import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Comment extends Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired
    })
  }

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

export default connect((state, ownProps) => {
  console.log(state.comments, ownProps);
  return {
    comment: state.comments.find(comment => comment.id === ownProps.id)
  } 
})(Comment);
