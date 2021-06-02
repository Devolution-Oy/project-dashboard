var userChangedCb = null;

export const signInCalled = jest.fn();
import { validEmail } from '../../constants/testData';

const authObject = {
  signInWithEmailAndPassword: async (email, pw) => {
    signInCalled();
    if (email === 'email@email.com' && pw === 'password')
      return Promise.resolve('Hello');
    else {
      var error = {
        code: 'auth/invalid-email'
      };
      if (email === validEmail && pw === 'invalid') {
        error = { code: 'auth/wrong-password' };
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