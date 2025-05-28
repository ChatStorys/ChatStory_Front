import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ marginTop?: string }>`
  display: flex;
  width: 427px;
  height: 50px;
  padding: 4px 14px 4px 17px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(57, 57, 57, 0.1);
  color: #493628;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: 28px;
`;
type ButtonProps = {
  children: React.ReactNode;
  marginTop?: string;
};
const Button: React.FC<ButtonProps> = ({ children, marginTop }) => {
  return <Container marginTop={marginTop}>{children}</Container>;
};

export default Button;
