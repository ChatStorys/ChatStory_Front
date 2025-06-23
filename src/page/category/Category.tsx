import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import Button from '../../component/button/Button';
import useStory from '../../hook/api/useStory/useStory';
import { useNavigate } from 'react-router-dom';
import { createStorybody } from '../../interface/useStory/story';
const Container = styled.div`
  background: #e4e0e1;
  padding: 0 126px;
  height: 1024px;
  z-index: 1;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
const Title = styled.input`
  width: 812px;
  height: 70px;
  flex-shrink: 0;
  border: none;
  border-bottom: 6px solid #d6c0b3;
  background: #e4e0e1;
  color: rgba(73, 54, 40, 0.9);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CategorySelect = styled.select`
  width: 812px;
  height: 70px;
  flex-shrink: 0;
  border: none;
  border-bottom: 6px solid #d6c0b3;
  background: #e4e0e1;
  color: rgba(73, 54, 40, 0.9);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Category: React.FC = () => {
  const categories = ['카테고리를 설정해주세요', '동화', '연애', '판타지', '무협', '액션', '스릴러', '추리'];
  const [selected, setSelected] = useState('전체');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const { createStory } = useStory();
  const handleCreateStory = async () => {
    const storyData: createStorybody = {
      title,
      category: selected,
    };
    console.log('소설 생성 데이터:', storyData);
    if (!title || selected === '카테고리를 설정해주세요') {
      alert('제목과 카테고리를 입력해주세요.');
      return;
    }
    try {
      const response = await createStory(storyData);
      console.log('소설 생성 성공:', response);
      navigate(`/chatting/${response.book_id}`);
    } catch (error) {
      console.error('소설 생성 실패:', error);
      alert('소설 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <Container>
      <Header title="카테고리"></Header>
      <Content>
        <Title placeholder="소설 제목을 입력해주세요" onChange={handleTitleChange} />
        <CategorySelect value={selected} onChange={handleChange}>
          {categories.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </CategorySelect>
        <Button onClick={handleCreateStory}>소설 만들기</Button>
      </Content>
    </Container>
  );
};

export default Category;
