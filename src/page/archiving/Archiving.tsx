import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import click from '../../assets/archiving/click.svg';
import hover from '../../assets/archiving/hover.svg';
import original from '../../assets/archiving/original.svg';
import pedestal from '../../assets/archiving/pedestal.svg';
import LeftrightBtn from '../../component/button/LeftrightBtn/LeftrightBtn';
import useArchive from '../../hook/api/useArchive/useArchive';
import { useNavigate } from 'react-router-dom';
import { Archivebody } from '../../interface/archive/archive';

const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;

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
  cursor: pointer;
`;

const Archiving: React.FC = () => {
  const { getarchive, Deletearchive } = useArchive();
  const navigate = useNavigate();
  const [archiveList, setArchiveList] = useState<Archivebody[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getarchiveInfo = async () => {
    try {
      const response: Archivebody[] = await getarchive();
      setArchiveList(response); // 배열 통째로 저장
      console.log('Archive data:', response);
    } catch (error) {
      console.error('Error fetching archive:', error);
    }
  };

  useEffect(() => {
    getarchiveInfo();
  }, []);
  const currentStory = archiveList[currentIndex];
  const handleLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  const handleRight = () => {
    if (currentIndex < archiveList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handleDelete = async () => {
    if (currentStory) {
      try {
        await Deletearchive(currentStory.bookId);
        setArchiveList((prev) => prev.filter((story) => story.bookId !== currentStory.bookId));
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      } catch (error) {
        console.error('Error deleting archive:', error);
      }
    }
  };
  const [imgState, setImgState] = useState<'default' | 'hover' | 'click'>('default');
  const getOriginalImg = () => {
    switch (imgState) {
      case 'hover':
        return hover;
      case 'click':
        return click;
      default:
        return original;
    }
  };
  return (
    <Container>
      <Header title="도서관" />

      {currentStory ? (
        <>
          <Content>
            <ImgBox>
              <Img
                src={getOriginalImg()}
                onMouseEnter={() => setImgState('hover')}
                onMouseLeave={() => setImgState('default')}
                onMouseDown={() => setImgState('click')}
                onMouseUp={() => setImgState('hover')}
                onClick={() => navigate(`/archive/${currentStory.bookId}`)}
              />
              <Img src={pedestal} />
            </ImgBox>
            <Footer>
              <Title>{currentStory.title}</Title>
              <Delete onClick={handleDelete}>소설 삭제</Delete>
            </Footer>
          </Content>
          <LeftrightBtn onLeftClick={handleLeft} onRightClick={handleRight} />
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>불러올 아카이브가 없습니다.</div>
      )}
    </Container>
  );
};

export default Archiving;
