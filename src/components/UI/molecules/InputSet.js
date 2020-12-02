import React from 'react';
import styled from 'styled-components';
import { Input } from '../atoms';

export default function InputSet() {
  return (
    <Container>
      <Input text='nickname' type='text' />
      <Input text='password' type='password' />
      {window.location.pathname === '/signup' ? (
        <Input text='password confirm' type='password' />
      ) : (
        ''
      )}
    </Container>
  );
}

const Container = styled.div`
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
