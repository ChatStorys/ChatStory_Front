import { createRoot } from 'react-dom/client';
import Routers from './router/Router.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}
  body {
    overflow: hidden; /* 👈 전역 스크롤 제거 */
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #e4e0e1;
  }
`;
createRoot(document.getElementById('root')!).render(
  <>
    <Routers />
    <GlobalStyle />
  </>,
);
