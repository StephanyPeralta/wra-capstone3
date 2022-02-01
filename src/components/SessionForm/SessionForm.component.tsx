import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../../providers/Auth';
import {
  SessionFormWrapper,
  AuthForm,
  ButtonWrapper,
  SessionButton,
  ErrorAlert,
} from './SessionForm.styled';

function SessionForm() {
  const { login, signup } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  async function handleLogin() {
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      toast.success('You Have Successfully Logged in!');
    } catch {
      setError('Incorrect email or password');
    }

    setLoading(false);
  }

  async function handleSignup() {
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      toast.success('You Have Successfully Signed up!');
    } catch (e) {
      setError('Failed to create account');
    }

    setLoading(false);
  }

  useEffect(() => {
    emailRef?.current?.focus();
  }, []);

  return (
    <SessionFormWrapper>
      {showSignup && <h1>SIGN UP</h1>}
      {showLogin && <h1>LOG IN</h1>}
      {error && <ErrorAlert>{error}</ErrorAlert>}
      <AuthForm>
        <label className="form-label" htmlFor="email">
          Email
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
            ref={emailRef}
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
            ref={passwordRef}
            minLength={6}
            required
          />
        </label>

        <ButtonWrapper className="btn-margin">
          {showSignup && (
            <SessionButton type="button" onClick={handleSignup} disabled={loading}>
              Sign Up
            </SessionButton>
          )}
          {showLogin && (
            <SessionButton type="button" onClick={handleLogin} disabled={loading}>
              Log In
            </SessionButton>
          )}
        </ButtonWrapper>
      </AuthForm>
      {showSignup && (
        <p>
          Already have an account?{' '}
          <span className="link-form" onClick={openLogin}>
            Log in
          </span>
        </p>
      )}
      {showLogin && (
        <p>
          Need an account?{' '}
          <span className="link-form" onClick={openSignup}>
            Sign up
          </span>
        </p>
      )}
    </SessionFormWrapper>
  );
}

export default SessionForm;
