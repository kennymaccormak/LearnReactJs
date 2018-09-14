import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import CommentList from './CommentList';
import './article.css';


class Article extends Component {
  getBody(article, isOpen) {
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments}/>
      </section>
    )
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div className="article">
        <h3>{article.title}</h3>
        <button className="btn btn-sm btn-primary" onClick={toggleOpen}>
          {isOpen ? "close" : "open"}
        </button>
        <CSSTransitionGroup transitionName="article"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
          {this.getBody(article, isOpen)}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Article;