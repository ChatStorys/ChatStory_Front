import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #493628;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 1px solid #000;
  border-radius: 20px;
`;
type Mainbutton = {
  children: React.ReactNode;
};
const Mainbutton: React.FC<Mainbutton> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Mainbutton;
