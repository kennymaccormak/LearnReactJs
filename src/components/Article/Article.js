import React, { Component } from 'react';
import CommentList from './CommentList';


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
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div className="article">
        <h3>{article.title}</h3>
        <button className="btn btn-sm btn-primary" onClick={toggleOpen}>
          {isOpen ? "close" : "open"}
        </button>
        {this.getBody(article, isOpen)}
      </div>
    );
  }
}

export default Article;