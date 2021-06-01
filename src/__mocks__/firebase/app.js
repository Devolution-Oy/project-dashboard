var userChangedCb = null;

export const signInCalled = jest.fn();

const authObject = {
  signInWithEmailAndPassword: async (email, pw) => {
    signInCalled();
    if (email && pw)
      return Promise.resolve('Hello');
    else {
      const error = {
        code: 'auth/invalid-email'
      };
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