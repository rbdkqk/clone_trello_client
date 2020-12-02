import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text, Button } from '../UI/atoms';
import { SignupInputSet, SocialLoginButtonSet } from '../UI/molecules';

export default function Signup() {
  return (
    <Container>
      <Text text='Sign up for your account!'></Text>
      <SignupInputSet />
      <Button
        text='Login'
        width='300px'
        fontSize='1.5em'
        backgroundColor='white'
      ></Button>
      <Text text='or'></Text>
      <SocialLoginButtonSet />
      <div>
        <Link to='/login'>Signed up already?</Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid red;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
