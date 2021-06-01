import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { signInCalled } from '../../__mocks__/firebase/app';
import Firebase, { FirebaseContext } from '../Firebase';
import React from 'react';

describe('Login Component', () => {
  it('Renders', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Email/i);
    expect(linkElement).toBeInTheDocument();
    const email = screen.getByPlaceholderText(/Email address/i);
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText(/Password/i);
    expect(password).toBeInTheDocument();
    const submit = screen.getByTestId(/submit/i);
    expect(submit).toBeInTheDocument();
  });
  it('Calls firebase email & pw login when Login button is pressed', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Login />
      </FirebaseContext.Provider>
    );
    userEvent.click(screen.getByText('Log In'));
    expect(signInCalled).toHaveBeenCalled();
  });
});