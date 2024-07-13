import React, { useEffect, useState } from 'react';
import ArticleList from './ArticleList';
import { Category } from '../../types';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Select from '../../components/Select';
import Menu from '../../components/Menu';
import styled from 'styled-components';
import { ErrorDialog } from '../../components/Dialogs';

const ArticlesWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Products = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showError, setShowError] = useState(false);

  const { category } = useParams() as any;

  const history = useHistory();

  useEffect(() => {
    axios
      .get<{ data: { categories: Category[] } }>('/graphql', {
        params: {
          query: `{
            categories {
              id
              name
              articleCount
              childCategories {
                name
                urlPath
              }
            }
          }`,
        },
      })
      .then((res) => {
        setCategories(res.data.data.categories);
      })
      .catch((err) => {
        setShowError(true);
      });
  }, []);

  const onChangeCategory = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <ArticlesWrapper>
      <Menu>
        <Select
          onChange={onChangeCategory}
          label='Category'
          name='categroy'
          options={categories.map((c) => ({ code: String(c.id), description: c.name }))}
        />
      </Menu>
      <ArticleList categoryId={category as string} />\
      {showError && (
        <ErrorDialog
          title='Server error.'
          description='There was a problem fetching the categories.'
          buttonText='OK'
          buttonAction={() => setShowError(false)}
        />
      )}
    </ArticlesWrapper>
  );
};

export default Products;
