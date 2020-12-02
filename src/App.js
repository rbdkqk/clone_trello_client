import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, css } from 'styled-components';
import './App.css';

import {
  MainContainer,
  LoginContainer,
  SignupContainer,
  HeaderContainer,
  MypageContainer,
} from './containers';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     height: 100vh;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* width: 100%; */
`;

const Body = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
`;

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Container className='Container'>
        <HeaderContainer />
        <Body style={{ border: '1px solid black' }}>
          {/* (body) */}
          <Switch>
            <Route path='/' exact component={MainContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/signup' component={SignupContainer} />
            <Route path='/mypage' component={MypageContainer} />
          </Switch>
        </Body>
      </Container>
    </>
  );
}

export default App;
