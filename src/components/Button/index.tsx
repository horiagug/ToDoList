import React from 'react';
import styled from 'styled-components';

const Button = styled.button<ButtonComponentProps>`
  padding: 5px 12px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color1};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;

  
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {
  return (
    <Button onClick={onClick} {...otherProps}>{children}</Button>
  );
}

export default ButtonComponent;