import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SessionForm from './SessionForm.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const authMock = { login: jest.fn(), signup: jest.fn() };

describe('LoginForm component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders LoginForm elements', () => {
    render(<SessionForm />);

    const loginTitle = screen.getByRole('heading', { name: 'LOG IN' });
    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Log In' });
    const signupLink = screen.getByText('Sign up');

    expect(loginTitle).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });

  it('handles submit function with provided Log In data', () => {
    render(<SessionForm />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Log In' });

    userEvent.type(inputEmail, 'test@test.com');
    userEvent.type(inputPassword, 'password');

    userEvent.click(loginButton);

    expect(authMock.login).toHaveBeenCalledWith('test@test.com', 'password');
  });

  it('renders SignupForm elements', () => {
    render(<SessionForm />);

    const signupLink = screen.getByText('Sign up');

    userEvent.click(signupLink);

    const signupTitle = screen.getByRole('heading', { name: 'SIGN UP' });
    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });
    const loginLink = screen.getByText('Log in');

    expect(signupTitle).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it('handles submit function with provided Sign Up data', () => {
    render(<SessionForm />);

    const signupLink = screen.getByText('Sign up');

    userEvent.click(signupLink);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });

    userEvent.type(inputEmail, 'test@test.com');
    userEvent.type(inputPassword, 'password');

    userEvent.click(signupButton);

    expect(authMock.signup).toHaveBeenCalledWith('test@test.com', 'password');
  });
});
