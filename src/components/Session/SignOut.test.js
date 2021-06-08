import { render, screen } from '@testing-library/react';
import SignOut from './SignOut';
import Firebase, { FirebaseContext } from '../Firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../../components/Session';
import { authUser } from '../../constants/testData';

test('renders learn react link', () => {
  render(
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <AuthContext.Provider value={authUser} >
          <SignOut />
        </AuthContext.Provider>
      </Router>
    </FirebaseContext.Provider>);
  const logout = screen.getByText('Log Out');
  expect(logout).toBeInTheDocument();
});