import { render, screen } from '@testing-library/react';
import SignOut from './SignOut';
import userEvent from '@testing-library/user-event';
import Firebase, { FirebaseContext } from '../Firebase';
import { AuthContext } from '../../components/Session';
import { testUser } from '../../constants/testData';
import { signOut } from '../../__mocks__/firebase/app';

describe('LogOut Component', () => {
  test('renders logout button', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <AuthContext.Provider value={testUser} >
          <SignOut />
        </AuthContext.Provider>
      </FirebaseContext.Provider>);
    const logout = screen.getByText('Log Out');
    expect(logout).toBeInTheDocument();
  });
  it('Calls firebase logout when logout button is clicked', () => {
    render(
      <FirebaseContext.Provider value={new Firebase()}>
        <SignOut />
      </FirebaseContext.Provider>);
    userEvent.click(screen.getByText('Log Out'));
    expect(signOut).toHaveBeenCalled();
  });
});