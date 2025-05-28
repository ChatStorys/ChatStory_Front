import React, { useState } from 'react';
import styled from 'styled-components';
import SignContainer from '../../component/sign/SignContainer';
import Loginbox from '../../component/Loginbox/Loginbox';
import Person from '../../assets/LoginBox/Person.svg';
import Password from '../../assets/LoginBox/Password.svg';
import Button from '../../component/button/Button';
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
const Signup = styled.div`
  color: #493628;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;
const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignContainer>
      <Title>ChatStory</Title>
      <Loginbox img={Person} content="아이디 입력" />
      <Loginbox img={Password} content="비밀번호 입력" />
      <Button marginTop="105px">로그인</Button>
      <Signup>회원가입</Signup>
    </SignContainer>
  );
};

export default Login;
