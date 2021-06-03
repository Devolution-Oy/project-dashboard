import { render, screen } from '@testing-library/react';
import Landing from './Landing';
import Firebase, { FirebaseContext } from '../../components/Firebase';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { AuthContext } from '../../components/Session';

test('renders learn react link', () => {
  render(
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <AuthContext.Provider value={null} >
          <Landing />
        </AuthContext.Provider>
      </Router>
    </FirebaseContext.Provider>);
  const header = screen.getByAltText(/LogoDevolution/i);
  expect(header).toBeInTheDocument();
  const footer = screen.getByText(/Find us/i);
  expect(footer).toBeInTheDocument();
  const login = screen.getByText(/Email/i);
  expect(login).toBeInTheDocument();
});
