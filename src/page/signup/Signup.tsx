import React from 'react';
import styled from 'styled-components';
import SignContainer from '../../component/sign/SignContainer';
import Button from '../../component/button/Button';
import Signupbox from '../../component/button/signupbox/Signupbox';
import SignPassword from '../../assets/Signup/SignPassword.svg';
import SignPerson from '../../assets/Signup/Signperson.svg';

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.h1`
  color: #493628;
  text-align: center;
  font-family: Pretendard;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 66px;
  margin-bottom: 90px;
`;
const Signup: React.FC = () => {
  return (
    <SignContainer>
      <Title>ChatStory</Title>
      <Gap>
        <Signupbox img={SignPerson} content="아이디를 입력해주세요" check={true} />
        <Signupbox img={SignPassword} content="비밀번호를 입력해주세요" check={false} />
        <Signupbox img={SignPerson} content="이름을 입력해주세요" check={false} />
      </Gap>
      <Button marginTop="52px">회원가입</Button>
    </SignContainer>
  );
};

export default Signup;
