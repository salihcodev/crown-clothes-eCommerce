import React from 'react';

import './SignIn.style.sass';
import FormInput from '../../components/form-input/FormInput.component';

import JokerBtn from '../../components/joker-button/JokerBtn.component';
import { signInWithGoogle } from '../../firebase/firebase-utils';

export default class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handelSubmission = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  inputOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handelSubmission}>
          <FormInput
            inputOnChange={this.inputOnChange}
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            required
          />
          <FormInput
            inputOnChange={this.inputOnChange}
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <JokerBtn type='submit'>Sign in</JokerBtn>
            <JokerBtn onClick={signInWithGoogle} isGoogleBtn>
              Sign in with google
            </JokerBtn>
          </div>
        </form>
      </div>
    );
  }
}
