import React from 'react';
import { Article as IArticle } from '../../types';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  column-span: 1;
  background-color: white;
  width: 250px;
  height: max-content;
`;

const Description = styled.div`
  height: 30%;
  padding: 0 1rem;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Button = styled.button`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  background-color: #938bdb;
  border: none;
  padding: 1rem;
  color: white;
  font-weight: 700;
`;

const Price = styled.p``;

interface ArticleProps {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <Card>
      <Image src={props.article.images[0].path}></Image>
      <Description>
        <Title>{props.article.name}</Title>
        <Price>
          {props.article.prices.currency}.{props.article.prices.value}
        </Price>
      </Description>
      <Button>Add to Cart</Button>
    </Card>
  );
};

export default Article;
