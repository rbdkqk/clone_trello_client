import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
            width='200px'
          ></img>
        </Link>
      </MainLogo>

      <LoginButton>
        <Link to='./login'>
          <button style={{ width: '100px', fontSize: '1.5em' }}>login</button>
        </Link>
      </LoginButton>

      <SignupButton>
        <Link to='./signup'>
          <button style={{ width: '100px', fontSize: '1.5em' }}>signup</button>
        </Link>
      </SignupButton>

      <MypageButton>
        <Link to='./mypage'>
          <button style={{ width: '100px', fontSize: '1.5em' }}>mypage</button>
        </Link>
      </MypageButton>

      <LogoutButton>
        <Link to='./mypage'>
          <button style={{ width: '100px', fontSize: '1.5em' }}>logout</button>
        </Link>
      </LogoutButton>
    </Container>
  );
}
