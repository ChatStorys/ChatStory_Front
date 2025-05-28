import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  width: 420px;
  height: 59px;
  flex-shrink: 0;
  padding: 16px 14px;
  display: flex;
  border-bottom: 1px solid #000000;
  justify-content: space-between;
  align-items: center;
`;
const LeftBox = styled.div`
  display: flex;
  gap: 26px;
`;
const RightBox = styled.div`
  display: flex;
  width: 69px;
  height: 18px;
  padding: 4px 14px 4px 17px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  color: #493628;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 14px */
  letter-spacing: -0.25px;
  border-radius: 10px;
  background: rgba(57, 57, 57, 0.1);
`;
const Img = styled.img`
  width: 24px;
  height: 24px;
`;
const Content = styled.input`
  color: #493628;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: -0.425px;
  border: none;
  background-color: #e4e0e1;
`;
type SignupProps = {
  img: string;
  content: string;
  check: boolean;
};
const Signupbox: React.FC<SignupProps> = ({ img, content, check }) => {
  return (
    <Container>
      <LeftBox>
        <Img src={img} alt="login" />
        <Content placeholder={content} />
      </LeftBox>
      <RightBox style={{ visibility: check ? 'visible' : 'hidden' }}>중복 확인</RightBox>
    </Container>
  );
};
export default Signupbox;
