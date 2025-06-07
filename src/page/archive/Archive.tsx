import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import LeftrightBtn from '../../component/button/LeftrightBtn/LeftrightBtn';
import { splitByLength, pageSplitByLine } from '../../functions/archive/splitByLength';
import music from '../../assets/Archive/Music.svg';
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
  border-bottom: 1px solid #ccc; /* 👈 밑줄 여기! */
  white-space: pre-wrap; /* 줄바꿈 유지 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  const content = [
    {
      content:
        '어둠이 짙게 깔린 골목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도  작은 철문 하나가 덜컹거리고 있었다.아니다 그건 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에  작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 없이 녹슬어 있는 문 앞에 소년이 섰다.목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다',
    },
  ];
  const lines = splitByLength(content[0].content, 55); // 40자씩 나누기
  const PAGE_SIZE = 14;
  const pageSize = pageSplitByLine(lines.length, PAGE_SIZE); // 페이지당 14줄로 나누기
  const [page, setPage] = useState(0);
  const currentLines = lines.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  return (
    <>
      <Container>
        <Header title="소설 제목" />
        <Novelcontent>
          {currentLines.map((line, idx) => (
            <Content key={idx}>{line}</Content>
          ))}
          <ArchiveFooter>
            <PageNumber>
              {page + 1} / {pageSize + 1}
            </PageNumber>
            <MusicBtn>
              <MusicContent>aespa-wiplash</MusicContent>
              <MusicImg src={music} />
            </MusicBtn>
          </ArchiveFooter>
        </Novelcontent>
        <LeftrightBtn onLeftClick={() => setPage((p) => Math.max(p - 1, 0))} onRightClick={() => setPage((p) => Math.min(p + 1, pageSize))} />
      </Container>
    </>
  );
};

export default Archive;
