import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../AC";

class AddCommentForm extends Component {
  state = {
    user: "",
    text: ""
  };

  validateTextLength = ev => {
    const target = ev.target;
    const value = target.value;
    const length = value.length;

    let lowLimit = 0;
    let hightLimit = 0;

    let newState = {};

    switch (target.className.indexOf("user-name")) {
      case -1:
        lowLimit = 20;
        hightLimit = 50;
        newState.text = value;
        break;

      default:
        lowLimit = 5;
        hightLimit = 15;
        newState.user = value;
        break;
    }

    if ((length < lowLimit || length > hightLimit) && length !== 0) {
      target.style.boxShadow = "0 0 0 0.2rem red";
      target.style.borderColor = "red";
    } else {
      target.style.boxShadow = "";
      target.style.borderColor = "";
    }

    this.setState(newState);
  };

  submitForm = ev => {
    const { user, text } = this.state;
    if (
      user.length >= 5 &&
      user.length <= 15 &&
      user.length !== 0 &&
      text.length >= 20 &&
      text.length <= 50 &&
      text.length !== 0
    ) {
      alert(`${user}, thx for your comment`);
      this.props.addComment(this.state);
      this.setState({
        user: "",
        text: ""
      });
    }
  };

  render() {
    return (
      <form className="form-group">
        <label>User name:</label>
        <input
          className="form-control user-name"
          value={this.state.user}
          onChange={this.validateTextLength}
          type="text"
        />
        <label>Leave your comment:</label>
        <textarea
          className="form-control comment-text"
          value={this.state.text}
          onChange={this.validateTextLength}
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

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: comment => {
      dispatch(addComment(comment, ownProps.articleId));
    }
  })
)(AddCommentForm);
