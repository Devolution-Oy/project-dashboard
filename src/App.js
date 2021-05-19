import './App.css';
import Landing from './Pages/Landing'

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
              <p>Hello</p>
            </main>
          </div>
        </Router>
      );
  }

export default App;
