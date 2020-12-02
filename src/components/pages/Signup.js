import React from 'react';
import { SignupOrLogin } from '../UI/organisms';

export default function Signup() {
  return (
    <SignupOrLogin
      titleText='Sign up for your account!'
      signupOrLoginText='Signup'
      linkText='Signed up already?'
    />
  );
}
