import React from 'react';
import styled from 'styled-components';
import Mainbutton from '../../component/Mainbutton/Mainbutton.tsx';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;
`;
const Title = styled.h1`
  color: #493628;
  text-align: center;
  font-family: Pretendard;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 66px;
  margin-bottom: 200px;
  border-radius: 20px;
`;
const Main: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>ChatStory</Title>
      <Mainbutton onClick={() => navigate('/category')}>소설 쓰기</Mainbutton>
      <Mainbutton onClick={() => navigate('/archiving')}>도서관 들어가기</Mainbutton>
    </Container>
  );
};

export default Main;
