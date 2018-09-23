import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { deleteArticle } from "../../AC";

import CommentList from "./CommentList";
import "./article.css";

class Article extends Component {
  getBody(article, isOpen) {
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }

  handleDelete = () => {
    console.log("delete article");
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div className="article">
        <h3>{article.title}</h3>
        <button className="btn btn-sm btn-primary" onClick={toggleOpen}>
          {isOpen ? "close" : "open"}
        </button>
        <button
          className="btn btn-sm btn-danger ml-2"
          onClick={this.handleDelete}
        >
          Delete
        </button>
        <CSSTransitionGroup
          transitionName="article"
          component="div"
          transitionAppear
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody(article, isOpen)}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteArticle }
)(Article);
