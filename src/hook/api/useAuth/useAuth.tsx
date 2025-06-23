import useApi from '../useApi';
import axios from 'axios';
import { registerAuthbody, loginAuthbody } from '../../../interface/useAuth/auth';

const useAuth = () => {
  const { authApi } = useApi();

  const registerAuth = (registerAuthbody: registerAuthbody) => {
    return authApi
      .post('/register', registerAuthbody)
      .then((response) => {
        console.log('✅ 회원가입 응답:', response.data);
        console.log('✅ 응답 헤더:', response.headers['Authorization']);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginAuth = (loginAuthbody: loginAuthbody) => {
    return authApi
      .post(`/login`, loginAuthbody)
      .then((response) => {
        console.log('✅ 로그인 응답:', response.data);
        localStorage.setItem('access_token', response.data.access_token);
        return response.data;
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return {
    registerAuth,
    loginAuth,
  };
};

export default useAuth;
