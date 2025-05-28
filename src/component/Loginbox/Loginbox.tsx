import styled from 'styled-components';
import React from 'react';
const Container = styled.div`
  display: flex;
  width: 427px;
  height: 50px;
  padding: 4px 14px 4px 17px;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d6c0b3;
  margin-bottom: 21px;
`;
const Img = styled.img`
  width: 24px;
  height: 24px;
`;
const Content = styled.input`
  color: #fff;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.425px;
  border-radius: 10px;
  background: #d6c0b3;
  border: none;
`;
type LoginProps = {
  img: string;
  content: string;
};
const Loginbox: React.FC<LoginProps> = ({ img, content }) => {
  return (
    <Container>
      <Img src={img} alt="login" />
      <Content placeholder={content} />
    </Container>
  );
};
export default Loginbox;
