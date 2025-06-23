import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import Chatcontent from '../../component/chatcontent/Chatcontent';
import Footer from '../../component/footer/Footer';
import Cutmodal from '../../component/cutmodal/Cutmodal';
import useStory from '../../hook/api/useStory/useStory';
import { useParams, useNavigate } from 'react-router-dom';
import useArchive from '../../hook/api/useArchive/useArchive';
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
    handleChapterStory();
    setCutModal((prev) => !prev);
  };
  const { book_id } = useParams();
  const id = book_id!;
  const navigate = useNavigate();
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
    // 스토리 전송 함수
    const storyData: sendStorybody = {
      book_id: id,
      prompt,
    };
    if (!prompt) {
      alert('내용을 입력해주세요.');
      return;
    }
    setContent((prev) => [...prev, { User: prompt, LLM_Model: '' }]);

    try {
      const response = await sendStory(storyData);
      console.log('스토리 전송 성공:', response);
      console.log('response:', prompt);
      setContent((prev) => [...prev, { User: '', LLM_Model: response?.prompt || '' }]);
      console.log('content:', content);
      setPromt('');
    } catch (error) {
      console.error('스토리 전송 실패:', error);
    }
  };

  const handleFinishStory = async () => {
    // 소설 완료 함수
    const chapterStory = {
      book_id: id,
    };
    try {
      const response = await finishStory(chapterStory);
      console.log('챕터 완료:', response);
      setCutModal((prev) => !prev);
      navigate(`/main`);
    } catch (error) {
      console.error('챕터 완료 실패:', error);
    }
  };
  const handleChapterStory = async () => {
    // 챕터 완료 함수
    const chapterStory = {
      book_id: id,
    };
    try {
      const response = await finishStoryChapter(chapterStory);
      console.log('챕터 성공:', response);
    } catch (error) {
      console.error('챕터 실패:', error);
    }
  };
  const { getarchiveAbook } = useArchive();
  const getArchiveContent = async () => {
    //이어쓰기 가져오는 함수
    try {
      const response = await getarchiveAbook(id);
      console.log('Archive content:', response);
      setContent(response?.chapters || []); // chapters가 없을 경우 빈 배열로 초기화
      console.log('content:', content);
    } catch (error) {
      console.error('Error fetching archive content:', error);
    }
  };
  useEffect(() => {
    getArchiveContent();
  }, [id]);
  const handleContinueStory = () => {
    setPromt('');
    setContent([
      {
        User: '',
        LLM_Model: '',
      },
    ]);
    setCutModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Header title="소설 쓰기" />
        <Chatcontent chatcontent={content} />
      </Container>
      <Footer handleCutModal={handleCutModal} onChange={handlePromtChange} handleSendStory={handleSendStory} value={prompt} />
      {cutModal && <Cutmodal handlefinish={handleFinishStory} handlechpater={handleContinueStory} />}
    </>
  );
};

export default Chatting;
