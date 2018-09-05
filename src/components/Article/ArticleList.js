import React from 'react';
import Article from './Article';

export default function ArticleList({articles}) {
  const articleElements = articles.map((article) => <Article key={article.id} article={article}/> );
  return (
    <ul className="list-group">
      {articleElements}
    </ul>
  );
}