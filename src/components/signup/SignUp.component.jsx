import React from 'react';

import './SignUp.style.sass';
import FormInput from '../form-input/FormInput.component';

import JokerBtn from '../joker-button/JokerBtn.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handelSubmission = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // check password to continue to firestore.
    if (password !== confirmPassword) return;

    // otherwise start store user info.
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // clear
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      // throw error.
    } catch (err) {
      console.error(err);
    }
  };

  inputOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with yor email and password</span>

        <form onSubmit={this.handelSubmission}>
          <FormInput
            inputOnChange={this.inputOnChange}
            type='text'
            name='displayName'
            value={displayName}
            label='display name'
            required
          />
          <FormInput
            inputOnChange={this.inputOnChange}
            type='email'
            name='email'
            label='email'
            value={email}
            required
          />
          <FormInput
            inputOnChange={this.inputOnChange}
            type='password'
            name='password'
            label='password'
            value={password}
            required
          />
          <FormInput
            inputOnChange={this.inputOnChange}
            type='password'
            name='confirmPassword'
            label='confirm password'
            value={confirmPassword}
            required
          />
          <div className='buttons'>
            <JokerBtn isGoogleBtn>Sign up Now</JokerBtn>
          </div>
        </form>
      </div>
    );
  }
}
