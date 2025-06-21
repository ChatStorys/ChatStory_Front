import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import click from '../../assets/archiving/click.svg';
import hover from '../../assets/archiving/hover.svg';
import original from '../../assets/archiving/original.svg';
import pedestal from '../../assets/archiving/pedestal.svg';
import LeftrightBtn from '../../component/button/LeftrightBtn/LeftrightBtn';
import useArchive from '../../hook/api/useArchive/useArchive';
const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 98px;
  margin-top: 50px;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img``;
const Title = styled.div`
  width: 812px;
  height: 70px;
  flex-shrink: 0;
  border-bottom: 6px solid #d6c0b3;
  background: #e4e0e1;
  color: #493628;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 70px;
`;
const Delete = styled.div`
  height: 70px;
  line-height: 70px;
  margin-top: 50px;
`;

const Archiving: React.FC = () => {
  const { getarchive, Deletearchive } = useArchive();
  const getarchiveInfo = async () => {
    try {
      const response = await getarchive();
      console.log('Archive data:', response);
    } catch (error) {
      console.error('Error fetching archive:', error);
    }
  };

  useEffect(() => {
    getarchiveInfo();
  }, []);
  return (
    <Container>
      <Header title="닉네임의 도서관" />
      <Content>
        <ImgBox>
          <Img src={original} />
          <Img src={pedestal} />
        </ImgBox>
        <Footer>
          <Title>소설 제목</Title>
          <Delete>소설 삭제</Delete>
        </Footer>
      </Content>
      <LeftrightBtn />
    </Container>
  );
};

export default Archiving;
