import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Main() {
  return (
    <div>
      <main className='main-content'>
        <Header />
        <p>Main page</p>
        <Footer />
      </main>
    </div>
  );
}
export default Main;