import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

const prodConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const stagingConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY_STAGING,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_STAGING,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_STAGING,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_STAGING,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_STAGING,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID_STAGING,
  appId: process.env.REACT_APP_FIREBASE_APP_ID_STAGING
};

const prConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY_PR,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_PR,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_PR,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_PR,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_PR,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID_PR,
  appId: process.env.REACT_APP_FIREBASE_APP_ID_PR
};

const devConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY_DEV,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_DEV,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID_DEV,
  appId: process.env.REACT_APP_FIREBASE_APP_ID_DEV
};

var config = null;
const deploy_env = process.env.REACT_APP_DEPLOY_ENV;

switch (deploy_env) {
case 'production':
  config = prodConfig;
  break;
case 'staging':
  config = stagingConfig;
  break;
case 'pr':
  config = prConfig;
  break;
case 'dev':
  config = devConfig;
  break;
default:
  config = devConfig;
  break;
}

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }


  Login = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  
}
export default Firebase;