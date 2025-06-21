import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import Chatcontent from '../../component/chatcontent/Chatcontent';
import Footer from '../../component/footer/Footer';
import Cutmodal from '../../component/cutmodal/Cutmodal';
import useStory from '../../hook/api/useStory/useStory';
import { useParams } from 'react-router-dom';
import { sendStorybody } from '../../interface/useStory/story';
const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
  z-index: 1;
`;
const Chatting: React.FC = () => {
  const [cutModal, setCutModal] = useState(false);
  const handleCutModal = () => {
    setCutModal((prev) => !prev);
  };
  const { book_id } = useParams();
  const id = book_id!;
  const [content, setContent] = useState([
    {
      User: '',
      LLM_Model: '',
    },
  ]);
  const [prompt, setPromt] = useState('');
  const handlePromtChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromt(e.target.value);
  };
  const { sendStory, finishStory, finishStoryChapter } = useStory();

  const handleSendStory = async () => {
    const storyData: sendStorybody = {
      book_id: id,
      prompt,
    };
    if (!prompt) {
      alert('내용을 입력해주세요.');
      return;
    }
    setContent((prev) => [...prev, { User: prompt, LLM_Model: '' }]); // 백에서 result라는 key로 보낸다고 가정

    try {
      const response = await sendStory(storyData);
      console.log('스토리 전송 성공:', response);
      console.log('response:', prompt);
      setContent((prev) => [...prev, { User: '', LLM_Model: response.prompt }]); // 백에서 result라는 key로 보낸다고 가정
      console.log('content:', content);
      setPromt('');
    } catch (error) {
      console.error('스토리 전송 실패:', error);
    }
  };

  const handleFinishStory = async () => {
    try {
      const response = await finishStory(id);
      console.log('챕터 완료:', response);
      setCutModal((prev) => !prev);
    } catch (error) {
      console.error('챕터 완료 실패:', error);
    }
  };
  const handleChapterStory = async () => {
    const chapterStory = {
      book_id: id,
    };
    try {
      const response = await finishStoryChapter(chapterStory);
      console.log('챕터 성공:', response);
      setPromt('');
      setCutModal((prev) => !prev);
    } catch (error) {
      console.error('챕터 실패:', error);
    }
  };
  return (
    <>
      <Container>
        <Header title="소설 제목" />
        <Chatcontent chatcontent={content} />
      </Container>
      <Footer handleCutModal={handleCutModal} onChange={handlePromtChange} handleSendStory={handleSendStory} />
      {cutModal && <Cutmodal handlefinish={handleFinishStory} handlechpater={handleChapterStory} />}
    </>
  );
};

export default Chatting;
