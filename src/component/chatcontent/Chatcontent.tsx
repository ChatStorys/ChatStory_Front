import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow-y: auto;
`;
const Chatcontainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LLM = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 18px 22px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: #d6c0b3;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0px 30px 30px 30px;
  background: #493628;
  margin-bottom: 6px;
`;
const User = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 18px 22px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  color: #493628;
  text-align: right;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 30px 0px 30px 30px;
  background: #d6c0b3;
  margin-bottom: 6px;
`;
const LeftChat = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const RightChat = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
type Chatting = {
  LLM_Model?: string;
  User?: string;
};
type ChatcontentProps = {
  chatcontent: Chatting[];
  isTyping?: boolean;
};
const Chatcontent: React.FC<ChatcontentProps> = ({ chatcontent, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatcontent]);
  return (
    <Container>
      {chatcontent.map((chats, index) => (
        <Chatcontainer key={index}>
          <RightChat>{chats.User && chats.User.length > 0 && <User>{chats.User}</User>}</RightChat>
          {isTyping && chatcontent.length == index + 1 && (
            <LeftChat>
              <LLM>...생성중입니다.</LLM>
            </LeftChat>
          )}
          <LeftChat>{chats.LLM_Model && chats.LLM_Model.length > 0 && <LLM>{chats.LLM_Model}</LLM>}</LeftChat>
        </Chatcontainer>
      ))}
      <div ref={messagesEndRef} />
    </Container>
  );
};

export default Chatcontent;
