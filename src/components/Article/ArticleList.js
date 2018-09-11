import React, { Component } from 'react';
import Article from './Article';

export default class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openArticleId: null
    }
  }

  toggleArticle(openArticleId) {
    this.setState({openArticleId});
  }

  render() {
    let {articles} = this.props;
    const articleElements = articles.map((article) => <Article key={article.id}
                                                               isOpen={article.id === this.state.openArticleId}
                                                               toggleOpen={this.toggleArticle.bind(this, article.id)}
                                                               article={article}/>);
    return (
      <ul className="list-group">
        {articleElements}
      </ul>
    );
  }
}