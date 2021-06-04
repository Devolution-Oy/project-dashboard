import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Main() {
  return (
    <div>
      <main className='main-content' data-testid='main'>
        <Header />
        Main Page
        <Footer />
      </main>
    </div>
  );
}
export default Main;