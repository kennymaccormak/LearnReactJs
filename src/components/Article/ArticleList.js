import React, { Component } from "react";

import { connect } from "react-redux";

import Article from "./Article";
import accordion from "../../decorators/accordion";

class ArticleList extends Component {
  render() {
    let { articles, openItemId, toggleOpenItem } = this.props;
    const articleElements = articles.map(article => (
      <li className="list-group-item list-group-item-action" key={article.id}>
        <Article
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
          article={article}
        />
      </li>
    ));

    return <ul className="list-group">{articleElements}</ul>;
  }
}

export default connect(({ filters, articles }) => {
  const {
    selected,
    dateRange: { from, to }
  } = filters;

  const filteredArticles = articles.filter(article => {
    const published = Date.parse(article.date);
    return (
      (!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
    );
  });

  return {
    articles: filteredArticles
  }
})(accordion(ArticleList));
