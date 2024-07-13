import React from 'react';
import { Article as IArticle } from '../../types';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  padding: 10px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1280px) {
    width: 25%;
  }

  @media (min-width: 1640px) {
    width: 14%;
  }

  @media (min-width: 1860px) {
    width: 16%;
  }
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
