import { render, screen } from '@testing-library/react';
import Header from './Header';
import Firebase, { FirebaseContext } from '../Firebase';
import { AuthContext } from '../../components/Session';
import { testUser } from '../../constants/testData';

test('renders learn react link', () => {
  render(<Header/>);
  const linkElement = screen.getByAltText(/LogoDevolution/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Access to LogOut button',() => {
  it('Auth user do contains logout button', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <AuthContext.Provider value={testUser} >
          <Header />
        </AuthContext.Provider>
      </FirebaseContext.Provider>);
    expect(document.getElementById('btn_logout')).toBeTruthy();
  });
  it('No-Auth user does not contains logout button', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <AuthContext.Provider value={null} >
          <Header />
        </AuthContext.Provider>
      </FirebaseContext.Provider>);
    expect(document.getElementById('btn_logout')).toBeFalsy();
  });
});