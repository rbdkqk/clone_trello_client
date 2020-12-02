import React from 'react';
import styled from 'styled-components';

export default function Button({ text, width, fontSize, backgroundColor }) {
  return (
    <ButtonWrap
      width={width}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
    >
      {text}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.button`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 2px;
`;
