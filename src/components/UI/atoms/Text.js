import React from 'react';
import styled from 'styled-components';

export default function Text({ text }) {
  return <Content>{text}</Content>;
}

const Content = styled.div`
  max-width: 50%;
  margin: 10px;
`;
