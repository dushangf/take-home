import React, { useEffect, useState } from 'react';
import Article from './Article';
import styled from 'styled-components';
import { Category, Article as IArticle } from '../../types';
import axios from 'axios';
import { ErrorDialog } from '../../components/Dialogs';

const ArticleListWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: inherit;
  width: 100%;
  gap: 2rem;
  background-color: #e0fdeb;
  align-items: start;
  justify-content: start;
  height: 100vh;
  overflow-y: scroll;
`;

interface ArticleListProps {
  categoryId: string;
}

const ArticleList: React.FC<ArticleListProps> = (props) => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [showError, setShowError] = useState(false);

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
        setShowError(true);
      });
  }, [props.categoryId]);

  return (
    <ArticleListWrapper>
      {articles.map((article) => (
        <Article article={article} />
      ))}
      {showError && (
        <ErrorDialog
          title='Server error.'
          description='There was a problem fetching the products.'
          buttonText='OK'
          buttonAction={() => setShowError(false)}
        />
      )}
    </ArticleListWrapper>
  );
};

export default ArticleList;
