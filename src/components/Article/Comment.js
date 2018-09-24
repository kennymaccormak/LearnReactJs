import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../../selectors';

class Comment extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired
    })
  };

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

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();
  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    }
  };
};

export default connect(mapStateToProps)(Comment);
