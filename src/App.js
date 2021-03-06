import './App.css';
import Landing from './Pages/Landing';
import Main from './Pages/Main/Main';
import Project from './Pages/Project/Project';
import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

class App extends Component {

  render() {
    return (
      <div>
        <main className='main-content'>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.MAIN} component={Main} />
          <Route exact path={ROUTES.PROJECT} component={Project} />
        </main>
      </div>
    );
  }
}


export default withAuthentication(App);