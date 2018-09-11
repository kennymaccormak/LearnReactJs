import React, { Component } from 'react';
import Article from './Article';
import accordion from '../../decorators/accordion';

class ArticleList extends Component {
  render() {
    let {articles, openItemId, toggleOpenItem} = this.props;
    const articleElements = articles.map((article) => <li className="list-group-item" key={article.id}>
        <Article isOpen={article.id === openItemId}
                 toggleOpen={toggleOpenItem(article.id)}
                 article={article}/>
      </li>
    );

    return (
      <ul className="list-group">
        {articleElements}
      </ul>
    );
  }
}

export default accordion(ArticleList);