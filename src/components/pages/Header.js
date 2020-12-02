import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../UI/atoms';

const Container = styled.div`
  flex: 0 1 80px;
  display: flex;
  align-items: center;
`;

const MainLogo = styled.div`
  flex: 6;
`;

const LoginButton = styled.div`
  flex: 1;
`;

const SignupButton = styled.div`
  flex: 1;
`;

const MypageButton = styled.div`
  flex: 1;
`;

const LogoutButton = styled.div`
  flex: 1;
`;

export default function Header() {
  return (
    <Container style={{ border: '1px solid black' }}>
      <MainLogo>
        <Link to='./'>
          <img
            src='/img/trello-logo-blue.png'
            alt='trello img'
            width='180px'
          ></img>
        </Link>
      </MainLogo>

      <LoginButton>
        <Link to='./login'>
          <Button
            text='login'
            width='100px'
            fontSize='1.5em'
            backgroundColor='white'
          ></Button>
        </Link>
      </LoginButton>

      <SignupButton>
        <Link to='./signup'>
          <Button
            text='signup'
            width='100px'
            fontSize='1.5em'
            backgroundColor='white'
          ></Button>
        </Link>
      </SignupButton>

      <MypageButton>
        <Link to='./mypage'>
          <Button
            text='mypage'
            width='100px'
            fontSize='1.5em'
            backgroundColor='white'
          ></Button>
        </Link>
      </MypageButton>

      <LogoutButton>
        <Link to='./mypage'>
          <Button
            text='logout'
            width='100px'
            fontSize='1.5em'
            backgroundColor='white'
          ></Button>
        </Link>
      </LogoutButton>
    </Container>
  );
}
