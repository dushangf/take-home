import React, { SetStateAction } from 'react';
import styled from 'styled-components';

const DialogBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  top: 0;
  left: 0;
`;

const ActionButton = styled.div`
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid gray;
  float: right;
  width: 30px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #dbdbdb;
  }
`;

interface ErrorDialogProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => any;
}

const ErrorDialogWrapper = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 2rem;
`;

const ErrorText = styled.p``;
const ErrorTitle = styled.h4``;

export const ErrorDialog: React.FC<ErrorDialogProps> = (props) => {
  return (
    <DialogBackground>
      <ErrorDialogWrapper>
        <ErrorTitle>{props.title}</ErrorTitle>
        <ErrorText>{props.description}</ErrorText>
        <ActionButton onClick={props.buttonAction}>{props.buttonText}</ActionButton>
      </ErrorDialogWrapper>
      ;
    </DialogBackground>
  );
};
