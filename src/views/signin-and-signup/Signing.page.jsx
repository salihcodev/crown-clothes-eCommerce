import React from 'react';
import './Signing.style.sass';

import SignIn from '../../components/signin/SignIn.component';
import SignUp from '../../components/signup/SignUp.component';

const SigningPage = () => {
  return (
    <article className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </article>
  );
};

export default SigningPage;
