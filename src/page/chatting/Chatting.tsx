import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import Chatcontent from '../../component/chatcontent/Chatcontent';
import Footer from '../../component/footer/footer';
const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
`;
const Chatting: React.FC = () => {
  const content = [
    {
      LLM_Model: '어둠이 짙게 깔린 골목 끝, 작은 철문 하나가 덜컹거리고 있었다. 표식도 없이 녹슬어 있는 문 앞에 소년이 섰다.',
      User: '삐걱―문 너머에는 끝없이 내려가는 나선형 계단이 있었다. 계단 아래로는 빛이 보이지 않았다. 소년은 발끝으로 계단을 톡 쳤다. 낡은 나무가 삐걱거리며 울었다.',
    },
    {
      LLM_Model:
        '들어가도 되는 걸까...그는 한숨을 내쉬고 첫 발을 디뎠다. 몇 바퀴를 돌며 내려가자, 갑자기 눈앞에 작은 방이 나타났다. 방 안에는 촛불 하나가 깜빡거리고 있었고, 그 밑에 낡은 책상과 책 한 권이 놓여 있었다. 소년은 다가가 책을 펼쳤다. 책장에는 단 한 줄,',
      User: '너는 여기서 깨어나야 한다',
    },
    { LLM_Model: '뭐야... 이게...', User: '그 순간, 책장이 저절로 넘어가기 시작했다. 새로운 글자가 피처럼 번져나오더니, 소년의 이름을 새겼다' },
  ];
  return (
    <Container>
      <Header title="소설 제목" />
      <Chatcontent chatcontent={content} />
      <Footer />
    </Container>
  );
};

export default Chatting;
