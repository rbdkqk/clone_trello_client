import React from 'react';
import { SignupOrLogin } from '../UI/organisms';

export default function Login() {
  return (
    <SignupOrLogin
      titleText='Login and Get Started!'
      signupOrLoginText='Login'
      linkText='Not a Trello member Yet?'
    />
  );
}
