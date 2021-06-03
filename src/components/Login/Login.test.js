import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import { signInCalled } from '../../__mocks__/firebase/app';
import Firebase, { FirebaseContext } from '../Firebase';

import { validEmail, validPassword, invalidPassword, invalidEmail } from '../../constants/testData';

describe('Login Component', () => {
  test('Renders Login component', () => {
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
    userEvent.type(screen.getByPlaceholderText('Email address'), validEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), validPassword);
    userEvent.click(screen.getByText('Log In'));
    expect(signInCalled).toHaveBeenCalled();
  });
  it('Invalid password login errors are handled', async () => {
    render(
      <FirebaseContext.Provider value={ new Firebase()}>
        <Login />
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), validEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), invalidPassword);
    userEvent.click(screen.getByText('Log In'));
    const error = await screen.findByText('Wrong password or email.');
    expect(error).toBeTruthy();
  });
  it('Invalid email login errors are handled', async () => {
    render(
      <FirebaseContext.Provider value={ new Firebase()}>
        <Login />
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), invalidEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), validPassword);
    userEvent.click(screen.getByText('Log In'));
    const error = await screen.findByText('Invalid email.');
    expect(error).toBeTruthy();
  });
  it('User not found login errors are handled', async () => {
    render(
      <FirebaseContext.Provider value={ new Firebase()}>
        <Login />
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), 'not-found');
    userEvent.type(screen.getByPlaceholderText('Password'), validPassword);
    userEvent.click(screen.getByText('Log In'));
    const error = await screen.findByText('Wrong password or email.');
    expect(error).toBeTruthy();
  });
  it('Unknown login errors are handled', async () => {
    render(
      <FirebaseContext.Provider value={ new Firebase()}>
        <Login />
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), invalidEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), invalidPassword);
    userEvent.click(screen.getByText('Log In'));
    const error = await screen.findByText('Unknown error.');
    expect(error).toBeTruthy();
  });
});