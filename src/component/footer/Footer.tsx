import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Endchapter from '../../assets/Chatting/Endchapter.svg';
import SendChat from '../../assets/Chatting/SendChat.svg';

const Container = styled.div`
  position: fixed;
  bottom: 90px;
  padding: 0 126px;
  width: 100%;
  box-sizing: border-box;
`;
const Subcontainer = styled.div`
  width: 100%;
  border-radius: 40px;
  border: 1px solid rgba(73, 54, 40, 0.4);
  background: #f6f6f6;
  box-shadow: 0px 4px 17px 0px rgba(73, 54, 40, 0.3);
  height: auto;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
`;
const Sendmessage = styled.textarea`
  border: none;
  background: #f6f6f6;
  border-radius: 40px;
  width: 100%;
  padding: 30px 50px 30px;
  font-size: 25px;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
const EndChapter = styled.img`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
`;
const SentChat = styled.img`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
`;
type Footer = {
  handleCutModal: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendStory?: () => void;
  value?: string;
};
const Footer: React.FC<Footer> = ({ handleCutModal, onChange, handleSendStory, value }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    autoResize();
  };
  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto'; // 높이 초기화
      el.style.height = `${el.scrollHeight}px`; // 스크롤 높이만큼 확장
    }
  };
  const clearInput = () => {
    if (textareaRef.current) {
      textareaRef.current.value = '';
      textareaRef.current.style.height = 'auto';
    }
  };
  const handleSendClick = () => {
    if (handleSendStory) {
      handleSendStory(); // 실제 메시지 전송 함수 호출
      clearInput(); // textarea 비우기 + 높이 초기화
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 줄바꿈 막기
    }
  };
  return (
    <Container>
      <Subcontainer>
        <Sendmessage ref={textareaRef} placeholder="메세지 보내기..." value={value} onChange={handleChange} onKeyDown={handleKeyDown} maxLength={1000} />{' '}
        <ButtonBox>
          <EndChapter src={Endchapter} onClick={handleCutModal} />
          <SentChat src={SendChat} onClick={handleSendClick} />
        </ButtonBox>
      </Subcontainer>
    </Container>
  );
};

export default Footer;
