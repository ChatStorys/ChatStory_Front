import React, { useState } from 'react';
import styled from 'styled-components';
import SignContainer from '../../component/sign/SignContainer';
import Loginbox from '../../component/Loginbox/Loginbox';
import Person from '../../assets/LoginBox/Person.svg';
import Password from '../../assets/LoginBox/Password.svg';
import Button from '../../component/button/Button';
import useAuth from '../../hook/api/useAuth/useAuth';
import { loginAuthbody } from '../../interface/useAuth/auth';
import { useNavigate } from 'react-router-dom';
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
  cursor: pointer;
`;
const Login: React.FC = () => {
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser_id(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const { loginAuth } = useAuth();

  const handleLogin = async () => {
    const logininfo: loginAuthbody = {
      user_id,
      password,
    };
    if (!user_id || !password) {
      console.log('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    try {
      const response = await loginAuth(logininfo);
      if (response) {
        alert('로그인 성공');
        navigate('/main');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/signup');
  };
  return (
    <SignContainer>
      <Title>ChatStory</Title>
      <Loginbox img={Person} content="아이디 입력" onchange={handleIdChange} type="text" />
      <Loginbox img={Password} content="비밀번호 입력" onchange={handlePasswordChange} type="password" />
      <Button marginTop="105px" onClick={handleLogin}>
        로그인
      </Button>
      <Signup onClick={handleSignup}>회원가입</Signup>
    </SignContainer>
  );
};

export default Login;
