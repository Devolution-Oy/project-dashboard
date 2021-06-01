import React from 'react';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function Landing() {
  return (
    <div>
      <main className='main-content' data-testid='main-content'>
        <Header />
        <Login />
        <Footer />
      </main>
    </div>
  );
}
export default Landing;