import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import Button from '../../component/button/Button';
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
const Title = styled.div`
  width: 812px;
  height: 70px;
  flex-shrink: 0;
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  return (
    <Container>
      <Header title="카테고리"></Header>
      <Content>
        <Title>제목을 적어주세요</Title>
        <CategorySelect value={selected} onChange={handleChange}>
          {categories.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </CategorySelect>
        <Button>소설 만들기</Button>
      </Content>
    </Container>
  );
};

export default Category;
