import React, { useEffect, useState } from 'react';
import Article from './Article';
import styled from 'styled-components';
import { Category, Article as IArticle } from '../../types';
import axios from 'axios';

const ArticleListWrapper = styled.div`
  padding: 2rem;
`;

interface ArticleListProps {
  categoryId: string;
}

const ArticleList: React.FC<ArticleListProps> = (props) => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    axios
      .get<{ data: { category: Category } }>('/graphql', {
        params: {
          query: `{
            category(id: ${props.categoryId}) {
              name
              articles {
                name
                variantName
                prices {
                  currency
                  value
                }
                images {
                  path
                }
              }
            }
          }`,
        },
      })
      .then((res) => {
        setArticles(res.data.data.category.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.categoryId]);

  return (
    <ArticleListWrapper>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </ArticleListWrapper>
  );
};

export default ArticleList;
