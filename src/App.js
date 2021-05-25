import './App.css';
import Landing from './Pages/Landing';
import Login from './components/Login/Login';

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
function App() {
  return (
    <Router>
      <div>
        <main className='main-content'>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.LANDING} component={Login} />
          <p>Hello world!</p>
        </main>
      </div>
    </Router>
  );
}

export default App;
