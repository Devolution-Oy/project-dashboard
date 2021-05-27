import React from 'react';
import Login from '../../components/Login/Login';
import Header from '../../components/Header/Header';
function Landing() {
  return (
    <div>
      <main data-testid='main-content'>
        <Header />
        <Login />
      </main>
    </div>
    
  );
}
export default Landing;