import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms';

export default function SocialLoginButtonSet() {
  return (
    <Container>
      <Button
        text='Google Login'
        width='300px'
        fontSize='1.5em'
        backgroundColor='white'
      />
      <Button
        text='Naver Login'
        width='300px'
        fontSize='1.5em'
        backgroundColor='white'
      />
    </Container>
  );
}

const Container = styled.div`
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 0px;
`;
