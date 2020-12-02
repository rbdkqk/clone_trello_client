import React from 'react';
import styled from 'styled-components';

export default function Input({ text, type }) {
  return <InputWrap placeholder={text} type={type}></InputWrap>;
}

const InputWrap = styled.input`
  flex: 1;
  width: 300px;
  max-width: 300px;
  padding: 10px;
  margin: 5px;
`;
