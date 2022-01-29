import React from 'react';

import {
  SessionFormWrapper,
  AuthForm,
  ButtonWrapper,
  SessionButton,
} from './SessionForm.styled';

function SessionForm() {
  return (
    <SessionFormWrapper>
      <h1>LOG IN</h1>

      <AuthForm>
        <label className="form-label" htmlFor="email">
          Email
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
        </label>

        <label className="form-label" htmlFor="password">
          Password
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            minLength={6}
            required
          />
        </label>

        <ButtonWrapper className="btn-margin">
          <SessionButton type="submit">Log In</SessionButton>
        </ButtonWrapper>
      </AuthForm>
      <p>Need an account? Sign up</p>
    </SessionFormWrapper>
  );
}

export default SessionForm;
