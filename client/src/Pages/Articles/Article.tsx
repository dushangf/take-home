import React from 'react';
import { Article as IArticle } from '../../types';

interface ArticleProps {
  article: IArticle
}

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <div>
      <p>{props.article.name}</p>
    </div>
  );
};

export default Article;
