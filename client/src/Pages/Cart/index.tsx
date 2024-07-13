import React from 'react';
import styled from 'styled-components';
import { CartItem as ICartItem } from '../../types';

const CartWrapper = styled.div`
  display: flex;
`;

const CartItem = styled.div`
  display: flex;
`;

interface CartProps {
  items: ICartItem[];
}

const Cart: React.FC<CartProps> = (props) => {
  return (
    <CartWrapper>
      {props.items.map((item) => (
        <CartItem>
          <img src={item.images[0].path} />
          <p>{item.name}</p>
        </CartItem>
      ))}
    </CartWrapper>
  );
};

export default Cart;
