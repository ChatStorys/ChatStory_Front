import React from 'react';
import styled from 'styled-components';
import Left from '../../../assets/LeftrightBtn/LeftBtn.svg';
import Right from '../../../assets/LeftrightBtn/RightBtn.svg';
interface LeftrightBtnProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
  disabledLeft?: boolean;
  disabledRight?: boolean;
  className?: string;
}
const Container = styled.div`
  position: absolute;
  bottom: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  left: 0;
  padding: 0 40px;
`;
const LeftBtn = styled.img``;
const RightBtn = styled.img``;
const LeftrightBtn: React.FC<LeftrightBtnProps> = ({ onLeftClick, onRightClick }) => {
  return (
    <Container>
      <LeftBtn src={Left} onClick={onLeftClick} />
      <RightBtn src={Right} onClick={onRightClick} />
    </Container>
  );
};

export default LeftrightBtn;
