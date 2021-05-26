import './App.css';
import Landing from './Pages/Landing';
import Main from './Pages/Main/Main';
import Project from './Pages/Project/Project';
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
          <Route exact path={ROUTES.MAIN} component={Main} />
          <Route exact path={ROUTES.PROJECT} component={Project} />
        </main>
      </div>
    </Router>
  );
}

export default App;
