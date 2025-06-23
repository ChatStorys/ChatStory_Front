import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import LeftrightBtn from '../../component/button/LeftrightBtn/LeftrightBtn';
import { splitByLength } from '../../functions/archive/splitByLength';
import music from '../../assets/Archive/Music.svg';
import { Chapter } from '../../interface/archive/archive';
import { useParams } from 'react-router-dom';
import useArchive from '../../hook/api/useArchive/useArchive';
const PAGE_SIZE = 14;

const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
  z-index: 1;
  position: relative;
`;
const Novelcontent = styled.div`
  margin-top: 34px;
  width: 100%;
  height: 800px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 0px 0px 20px 12px rgba(118, 94, 76, 0.3);
  padding: 60px;
`;
const Content = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 27px;
  font-style: normal;
  font-weight: 200;
  line-height: 42.8px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Cover = styled.div`
  width: 100%;
  height: 90%;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #493628;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #493628;
  font-family: Pretendard;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ArchiveFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;
const PageNumber = styled.div`
  color: #000;
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const MusicBtn = styled.div`
  border-radius: 50px;
  border: 0.7px solid #493628;
  height: 58px;
  width: auto;
  padding: 17px 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;
const MusicContent = styled.div`
  color: #493628;
  font-family: Paperlogy;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  align-items: center;
`;
const MusicImg = styled.img``;
const Archive: React.FC = () => {
  const [story, setStory] = useState({
    bookId: '123e4567-e89b-12d3-a456-426614174000',
    title: '인공지능과 나의 하루',
    chapter: [
      {
        content:
          '안녕하세요 안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요난 그렇게 하루를 시작했어요. AI가 추천해준 음악을 들으며 기분 좋게 하루를 시작했답니다. 이 음악은 정말 기분이 좋아지는 멜로디였어요. AI가 추천해준 음악은 "A Day with AI"라는 곡이었고, 작곡가는 OpenAI Soundworks였습니다. 이 곡은 AI와의 하루를 함께하는 느낌을 잘 표현해주었어요.사ㅣㄹ 지나ㅉ 몰르아러 ㅇ니렁ㄴ미렂댜ㅐ;ㄹ ㅓㅇㄴ마ㅣㅓ라 ㅁㄴㅇ;ㅐ랴ㅓㅈㄷㅁ ㅓ닝ㅁ프 ㄴ래;ㅠㅓㄴ랲;ㅓㅁ개ㅑ헞ㅁ[ㅔ어ㅑ러댤;ㅁ널 ㄴ얼먀ㅐㄷ절 ;ㅁ재뢔먕누니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 니다. 이 곡은 AI와의 하루를 함께하는 느낌을 ',

        musicTitle: 'A Day with AI',
        composer: 'OpenAI Soundworks',
      },
      {
        content:
          '오늘은 인공지능과 함께하는 특별한 하루입니다. 아침에 일어나서 AI가 추천해준 음악을 들으며 시작했어요. 이 음악은 정말 기분이 좋아지는 멜로디였어요. AI가 추천해준 음악은 "A Day with AI"라는 곡이었고, 작곡가는 OpenAI Soundworks였습니다. 이 곡은 AI와의 하루를 함께하는 느낌을 잘 표현해주었어요.',
        musicTitle: "Tomorrow's Code",
        composer: 'AI Composer',
      },
    ],
    createdAt: '2025-06-22T10:43:28.002Z',
  });
  const { book_id } = useParams();
  const { getarchiveAbook } = useArchive();
  const getArchiveAbook = async () => {
    try {
      if (book_id) {
        const response = await getarchiveAbook(book_id);
        // setStory(response);
        console.log('아카이브 뜬거', response);
      }
    } catch (error) {
      console.error('Error fetching archive:', error);
    }
  };
  useEffect(() => {
    getArchiveAbook();
  }, [book_id]);
  const makePageArray = (chapterArr: Chapter[]) => {
    const pages: { type: 'cover' | 'content'; content?: string; musicTitle?: string; composer?: string; index?: number }[] = [];
    chapterArr.map((ch, index) => {
      pages.push({ type: 'cover', index: index + 1, musicTitle: ch.musicTitle, composer: ch.composer });
      const lines = splitByLength(ch.content, 34);
      const pageSize = lines.length / PAGE_SIZE;
      for (let i = 0; i < pageSize; i++) {
        const start = i * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        pages.push({
          type: 'content',
          content: lines.slice(start, end).join('\n'),
          musicTitle: ch.musicTitle,
          composer: ch.composer,
        });
      }
    });
    return pages;
  };

  const pages = makePageArray(story.chapter);
  const [pageindex, setPageindex] = useState(0);
  const currentLines = pages[pageindex];
  return (
    <>
      <Container>
        <Header title={story.title} />
        <Novelcontent>
          {currentLines.type === 'cover' ? (
            <Cover>{`Chapter${currentLines.index}`}</Cover>
          ) : (
            currentLines.content?.split('\n').map((line, idx) => <Content key={idx}>{line}</Content>)
          )}
          <ArchiveFooter>
            <PageNumber>
              {pageindex + 1} / {pages.length}
            </PageNumber>
            <MusicBtn>
              <MusicContent>
                {currentLines.composer}-{currentLines.musicTitle}
              </MusicContent>
              <MusicImg src={music} />
            </MusicBtn>
          </ArchiveFooter>
        </Novelcontent>
        <LeftrightBtn onLeftClick={() => setPageindex((p) => Math.max(p - 1, 0))} onRightClick={() => setPageindex((p) => Math.min(p + 1, pages.length - 1))} />
      </Container>
    </>
  );
};

export default Archive;
