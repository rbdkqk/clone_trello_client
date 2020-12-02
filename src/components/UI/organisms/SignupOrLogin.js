import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Text, Button } from '../atoms';
import { InputSet, SocialLoginButtonSet } from '../molecules';

export default function SignupOrLogin({
  titleText,
  signupOrLoginText,
  linkText,
}) {
  return (
    <Container>
      <Text text={titleText}></Text>
      <InputSet />
      <Button
        text={signupOrLoginText}
        width='300px'
        fontSize='1.5em'
        backgroundColor='white'
      ></Button>
      <Text text='or'></Text>
      <SocialLoginButtonSet
        googleText={`Google ${signupOrLoginText}`}
        naverText={`Naver ${signupOrLoginText}`}
      />
      <div>
        <Link to='/login'>{linkText}</Link>
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
