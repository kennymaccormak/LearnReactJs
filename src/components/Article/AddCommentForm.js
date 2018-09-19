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

    let lowLimit = 0;
    let hightLimit = 0;

    let newState = {};

    switch (target.className.indexOf('user-name')) {
      case -1:
        lowLimit = 20;
        hightLimit = 50;
        newState.commentText = value;
        break;

      default:
        lowLimit = 5;
        hightLimit = 15;
        newState.username = value;
        break;
    }

    if ((length < lowLimit || length > hightLimit) && length !== 0) {
      target.style.boxShadow = '0 0 0 0.2rem red';
      target.style.borderColor = 'red';
    } else {
      target.style.boxShadow = '';
      target.style.borderColor = '';
    }

    this.setState(newState);
  };

  submitForm = ev => {
    const { username, commentText } = this.state;
    if (
      username.length >= 5 &&
      username.length <= 15 &&
      username.length !== 0 &&
      commentText.length >= 20 &&
      commentText.length <= 50 &&
      commentText.length !== 0
    ) {
      alert(`${username}, thx for your comment`);
      this.setState({
        username: '',
        commentText: ''
      });
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
        <button
          className="btn btn-sm btn-success"
          onClick={this.submitForm}
          type="button"
        >
          Send
        </button>
      </form>
    );
  }
}

export default AddCommentForm;
