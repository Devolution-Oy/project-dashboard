import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import userEvent from '@testing-library/user-event';
import { flushPromises, validEmail, validPassword } from './constants/testData';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

describe('App', () => {
  test('renders learn react link', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <App />
        </Router>
      </FirebaseContext.Provider>);
    const linkElement = screen.getByTestId(/main-content/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Changes view to main after succesfull login', async () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <App />
        </Router>
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), validEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), validPassword);
    userEvent.click(screen.getByText('Log In'));
    await flushPromises();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    userEvent.click(screen.getByText('Log Out'));
    await flushPromises();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
  });
  it('Login user redirect to main', async () => {
    const history = createMemoryHistory();
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Router history={history}>
          <App />
        </Router>
      </FirebaseContext.Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Email address'), validEmail);
    userEvent.type(screen.getByPlaceholderText('Password'), validPassword);
    userEvent.click(screen.getByText('Log In'));
    await flushPromises();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    history.push('/');
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});