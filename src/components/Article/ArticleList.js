import React, { Component } from "react";

import { connect } from "react-redux";

import Article from "./Article";
import accordion from "../../decorators/accordion";
import {filtratedArticlesSelector} from '../../selectors';

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

export default connect((state) => {
  
  return {
    articles: filtratedArticlesSelector(state)
  }
})(accordion(ArticleList));
