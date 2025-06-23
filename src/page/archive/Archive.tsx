import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import LeftrightBtn from '../../component/button/LeftrightBtn/LeftrightBtn';
import { splitByLength } from '../../functions/archive/splitByLength';
import music from '../../assets/Archive/Music.svg';
import { Chapter } from '../../interface/archive/archive';
import { useParams } from 'react-router-dom';
import useArchive from '../../hook/api/useArchive/useArchive';
import { ArchiveContent } from '../../interface/archive/archive';
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
  const dummyStory: ArchiveContent = {
    bookId: 'dummy-book-id',
    title: '더미 책 제목',
    createdAt: new Date().toISOString(),
    chapters: [
      {
        chapter_num: 1,
        content: '이것은 더미 콘텐츠입니다. 테스트용입니다.',
        recommended_music: [
          {
            title: '더미 음악 제목',
            artist: '더미 아티스트',
          },
        ],
      },
    ],
  };
  const [story, setStory] = useState<ArchiveContent>(dummyStory);

  const { book_id } = useParams();
  const { getarchiveAbook } = useArchive();
  const getArchiveAbook = async () => {
    try {
      if (book_id) {
        const response = await getarchiveAbook(book_id);
        setStory(response);
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
    const pages: { type: 'cover' | 'content'; content?: string; title?: string; artist?: string; index?: number }[] = [];
    chapterArr.forEach((ch, index) => {
      console.log('ch', ch);
      const title = ch.recommended_music[0].title;
      const artist = ch.recommended_music[0].artist;
      pages.push({ type: 'cover', index: index + 1, title, artist });

      const lines = splitByLength(ch.content, 53);
      const pageCount = Math.max(1, Math.ceil(lines.length / PAGE_SIZE));

      for (let i = 0; i < pageCount; i++) {
        pages.push({
          type: 'content',
          content: lines.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE).join('\n'),
          title,
          artist,
        });
      }
    });
    return pages;
  };

  const pages = makePageArray(story.chapters);
  const [pageindex, setPageindex] = useState(0);
  const currentLines = pages[pageindex];
  return (
    <>
      <Container>
        <Header title={story.title} />
        <Novelcontent>
          {currentLines?.type === 'cover' ? (
            <Cover>{`Chapter${currentLines.index}`}</Cover>
          ) : (
            currentLines?.content?.split('\n').map((line, idx) => <Content key={idx}>{line}</Content>)
          )}
          <ArchiveFooter>
            <PageNumber>
              {pageindex + 1} / {pages.length}
            </PageNumber>
            <MusicBtn>
              <MusicContent>
                {currentLines?.artist}-{currentLines?.title}
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
