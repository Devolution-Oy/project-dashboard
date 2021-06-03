var userChangedCb = null;

export const signInCalled = jest.fn();
import { validEmail, validPassword } from '../../constants/testData';

const authObject = {
  signInWithEmailAndPassword: async (email, pw) => {
    signInCalled();
    if (email === validEmail && pw === validPassword)
      return Promise.resolve('Hello');
    else {
      var error = {
        code: 'auth/unknown'
      };
      if (email === validEmail && pw === 'invalid') {
        error = { code: 'auth/wrong-password' };
      }
      if (email === 'invalid' && pw === validPassword) {
        error = { code: 'auth/invalid-email' };
      }
      if (email === 'not-found' && pw === validPassword) {
        error = { code: 'auth/user-not-found' };
      }
      return Promise.reject(error);
    }
  },
  onAuthStateChanged: jest.fn(cb => {
    cb(null);
  }),
  onUserChanged: jest.fn((cb) => {
    userChangedCb = cb;
  }),
  setAuthUser: jest.fn((user) => {
    userChangedCb(user);
  })
};


const app = {
  initializeApp: jest.fn(),
  auth: () => {
    return authObject;
  }
};

export default app;