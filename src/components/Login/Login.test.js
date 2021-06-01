import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import { signInCalled } from '../../__mocks__/firebase/app';
import Firebase, { FirebaseContext } from '../Firebase';

describe('Login Component', () => {
  test('renders learn react link', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Login />
      </FirebaseContext.Provider>);
    const linkElement = screen.getByText(/Email/i);
    expect(linkElement).toBeInTheDocument();
    const email = screen.getByPlaceholderText(/Email address/i);
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText(/Password/i);
    expect(password).toBeInTheDocument();
    const submit = screen.getByTestId(/submit/i);
    expect(submit).toBeInTheDocument();
  });
  it('Calls firebase login when submit button is clicked', () => {
    render(
      <FirebaseContext.Provider value={ new Firebase()}>
        <Login />
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), 'email@email.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByText('Log In'));
    expect(signInCalled).toHaveBeenCalled();
  });
});