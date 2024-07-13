import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  height: 100%;
  background-color: lime;
  min-width: 180px;
`;

interface MenuProps {
  children: JSX.Element;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return <MenuWrapper>{children}</MenuWrapper>;
};

export default Menu;
