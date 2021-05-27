import React from 'react';
import Login from '../../components/Login/Login';
import Header from '../../components/Header/Header';
function Landing() {
  return (
    <div>
      <main className='main-content'>
        <Header />
        <p>Landing page</p>
        <Login />
      </main>
    </div>
    
  );
}
export default Landing;