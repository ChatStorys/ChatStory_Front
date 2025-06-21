import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #3939391a;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const Modal = styled.div`
  width: 341px;
  height: 225px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 0px 4px 15px 9px rgba(118, 94, 76, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;
const CutButton = styled.div`
  display: inline-flex;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #493628;
  width: 288px;
  height: 66px;
  color: #493628;
  font-family: Pretendard;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
type cutModal = {
  handlefinish: () => void;
  handlechpater: () => void;
};
const Cutmodal: React.FC<cutModal> = ({ handlefinish, handlechpater }) => {
  return (
    <Container>
      <Modal>
        <CutButton onClick={handlechpater}>다음 챕터로 넘어가기</CutButton>
        <CutButton onClick={handlefinish}>소설 끝내기 </CutButton>
      </Modal>
    </Container>
  );
};

export default Cutmodal;
