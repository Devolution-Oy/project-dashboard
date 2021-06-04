import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import userEvent from '@testing-library/user-event';
import { validEmail, validPassword} from './constants/testData';

describe('App', () => {
  test('renders learn react link', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>);
    const linkElement = screen.getByTestId(/main-content/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Changes view to main after succesfull login', async () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), validEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), validPassword);
    userEvent.click(screen.getByText('Log In'));
    await flushPromises();
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
export const flushPromises = () => new Promise(setImmediate);