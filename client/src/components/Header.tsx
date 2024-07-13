import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Links = styled.ul`
  display: flex;
`;

const LinkWrapper = styled.li`
  list-style: none;
  margin: 0 1rem;
  color: red;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: darkred;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Home</Title>
      <Links>
        <LinkWrapper>
          <StyledLink to='/products/1'>Products</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to='/about'>About</StyledLink>
        </LinkWrapper>
      </Links>
    </HeaderContainer>
  );
};

export default Header;
