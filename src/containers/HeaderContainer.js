import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  /* flex: 1;로 작성하면 flex-grow: 1;과 같습니다. */
  /* 나머지 속성은 생략했으니 기본값이 적용되어 flex-shrink: 1;, flex-basis: auto; 가 됩니다. */
  /* flex-grow : Item의 증가 너비 비율을 설정 */
  flex: 0 1 80px;
  display: flex;
`;

const SignupButton = styled.button`
  align-self: flex-end;
`;

export default function HeaderContainer() {
  return (
    <Header style={{ border: '1px solid black' }}>
      <div>
        <Link to='./'>clone_Trello</Link>
        <Link to='./login'>
          <button>login</button>
        </Link>
        <Link to='./signup'>
          <SignupButton>signup</SignupButton>
        </Link>
      </div>
    </Header>
  );
}
