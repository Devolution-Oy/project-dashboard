import { render, screen } from '@testing-library/react';
import SignOut from './SignOut';
import Firebase, { FirebaseContext } from '../Firebase';
import { AuthContext } from '../../components/Session';
import { testUser } from '../../constants/testData';

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