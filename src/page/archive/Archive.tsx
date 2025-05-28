import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';

const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
  z-index: 1;
`;
const Novelcontent = styled.div`
  margin-top: 34px;
  width: 100%;
  height: 840px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 0px 0px 20px 12px rgba(118, 94, 76, 0.3);
  padding: 60px;
`;
const Archive: React.FC = () => {
  const content = [
    {
      content:
        '어둠이 짙게 깔린 골목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다.목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다',
    },
  ];
  return (
    <>
      <Container>
        <Header title="소설 제목" />
        <Novelcontent></Novelcontent>
      </Container>
    </>
  );
};

export default Archive;
