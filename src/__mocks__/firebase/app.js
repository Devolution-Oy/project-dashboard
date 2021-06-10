import { testUser } from '../../constants/testData';
var userChangedCb = null;

export const signInCalled = jest.fn();

export const signOut = jest.fn();

import { validEmail, validPassword, invalidPassword, invalidEmail } from '../../constants/testData';

const resetCallBack = () => {
  userChangedCb = null;
};

const authObject = {
  signInWithEmailAndPassword: async (email, pw) => {
    signInCalled();
    if (email === validEmail && pw === validPassword) {
      if (userChangedCb) {
        userChangedCb(testUser);
      }
      return Promise.resolve(testUser);
    }
    else {
      var error = {
        code: 'auth/unknown'
      };
      if (email === validEmail && pw === invalidPassword) {
        error = { code: 'auth/wrong-password' };
      }
      if (email === invalidEmail && pw === validPassword) {
        error = { code: 'auth/invalid-email' };
      }
      if (email === 'not-found' && pw === validPassword) {
        error = { code: 'auth/user-not-found' };
      }
      return Promise.reject(error);
    }
  },
  onAuthStateChanged: (callback) => {
    userChangedCb = callback;
    return resetCallBack;
  },
  signOut: () => {
    signOut();
    if (userChangedCb) {
      userChangedCb();
    }
    return Promise.resolve();
  }
};

const app = {
  initializeApp: jest.fn(),
  auth: () => {
    return authObject;
  }
};


export default app;