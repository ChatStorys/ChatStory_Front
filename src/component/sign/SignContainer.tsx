import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(228, 224, 225, 0.47) 0%, rgba(228, 224, 225, 0.47) 100%), rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 850px;
  height: 650px;
  flex-shrink: 0;
  background-color: #e4e0e1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type Props = {
  children: React.ReactNode;
};
const SignContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default SignContainer;
