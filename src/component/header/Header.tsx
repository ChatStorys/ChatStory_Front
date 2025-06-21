import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(73, 54, 40, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
`;
const BackArrow = styled.div`
  color: #493628;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(73, 54, 40, 0.8);
  font-family: 'Heir of Light';
  font-size: 50px;
  font-style: normal;
  cursor: pointer;
`;
const Title = styled.div`
  color: #493628;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(73, 54, 40, 0.8);
  font-family: 'Pretendard';
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
`;
const Empty = styled.div``;
type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackArrow onClick={() => navigate(-1)}>&lt;</BackArrow>
      <Title>{title}</Title>
      <Empty></Empty>
    </Container>
  );
};

export default Header;
