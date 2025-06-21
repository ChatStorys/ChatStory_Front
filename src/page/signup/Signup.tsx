import React, { useState } from 'react';
import styled from 'styled-components';
import SignContainer from '../../component/sign/SignContainer';
import Button from '../../component/button/Button';
import Signupbox from '../../component/button/signupbox/Signupbox';
import SignPassword from '../../assets/Signup/SignPassword.svg';
import SignPerson from '../../assets/Signup/Signperson.svg';
import useAuth from '../../hook/api/useAuth/useAuth';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_id: '',
    password: '',
    name: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { registerAuth } = useAuth();
  const handleRegister = async () => {
    if (!form.user_id || !form.password || !form.name) {
      console.log('모든 필드를 입력해주세요.', form);
      return;
    }
    if (form.user_id.length < 4 || form.user_id.length > 20) {
      alert('아이디는 최소 4자 이상 20자 이하여야 합니다.');
      return;
    } else if (form.password.length < 8) {
      alert('비밀번호는 최대 8자 이상이여야 합니다.');
    } else if (form.name.length < 2) {
      alert('이름은 최소 2자 이상이여야 합니다.');
      return;
    }
    try {
      const response = await registerAuth(form);
      if (response) {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <SignContainer>
      <Title>ChatStory</Title>
      <Gap>
        <Signupbox img={SignPerson} content="아이디를 입력해주세요" check={true} form={form} onChange={handleChange} type="text" inputname="user_id" />
        <Signupbox
          img={SignPassword}
          content="비밀번호를 입력해주세요"
          check={false}
          form={form}
          onChange={handleChange}
          type="password"
          inputname="password"
        />
        <Signupbox img={SignPerson} content="이름을 입력해주세요" check={false} form={form} onChange={handleChange} type="text" inputname="name" />
      </Gap>
      <Button marginTop="52px" onClick={handleRegister}>
        회원가입
      </Button>
    </SignContainer>
  );
};

export default Signup;
