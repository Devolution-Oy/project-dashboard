import { render, screen } from '@testing-library/react';
import Header from './Header';
import Firebase, { FirebaseContext } from '../Firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../../components/Session';
import { authUser } from '../../constants/testData';

test('renders learn react link', () => {
  render(<Header/>);
  const linkElement = screen.getByAltText(/LogoDevolution/i);
  expect(linkElement).toBeInTheDocument();
});

describe('User access',() => {
  it('Auth user do contains logout button', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <AuthContext.Provider value={authUser} >
            <Header />
          </AuthContext.Provider>
        </Router>
      </FirebaseContext.Provider>);
    expect(document.getElementById('btn_logout')).toBeTruthy();
  });
  it('No-Auth user does not contains logout button', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <AuthContext.Provider value={null} >
            <Header />
          </AuthContext.Provider>
        </Router>
      </FirebaseContext.Provider>);
    expect(document.getElementById('btn_logout')).toBeFalsy();
  });
});