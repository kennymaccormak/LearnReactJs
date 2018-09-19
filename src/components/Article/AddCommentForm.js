import React, { Component } from 'react';

class AddCommentForm extends Component {
  state = {
    username: '',
    commentText: ''
  };

  validateTextLenth = ev => {
    const target = ev.target;
    const value = target.value;
    const length = value.length;

    switch (target.className.indexOf('user-name')) {
      case -1:
        if (length < 20 || length > 50) {
          target.style.boxShadow = '0 0 0 0.2rem red';
          target.style.borderColor = 'red';
        } else {
          target.style.boxShadow = '';
          target.style.borderColor = '';
        }
        this.setState({
          commentText: value
        });
        break;
      default:
        if (length < 5 || length > 15) {
          target.style.boxShadow = '0 0 0 0.2rem red';
          target.style.borderColor = 'red';
        } else {
          target.style.boxShadow = '';
          target.style.borderColor = '';
        }
        this.setState({
          username: value
        });
        break;
    }

    if (length === 0) {
      target.style.boxShadow = '';
      target.style.borderColor = '';
    }
  };

  render() {
    return (
      <form className="form-group">
        <label>User name:</label>
        <input
          className="form-control user-name"
          value={this.state.username}
          onChange={this.validateTextLenth}
          type="text"
        />
        <label>Leave your comment:</label>
        <textarea
          className="form-control comment-text"
          value={this.state.commentText}
          onChange={this.validateTextLenth}
        />
        <button className="btn btn-sm btn-success" type="button">
          Send
        </button>
      </form>
    );
  }
}

export default AddCommentForm;
