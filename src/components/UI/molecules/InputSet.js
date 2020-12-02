import React from 'react';
import styled from 'styled-components';
import { Input } from '../atoms';

export default function InputSet({ text, type }) {
  return (
    <Container>
      <Input type={type} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 0px;
`;
