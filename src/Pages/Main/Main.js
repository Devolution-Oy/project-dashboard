import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import DesignList from '../../components/DesignList/DesignList';

function Main() {
  return (
    <div>
      <main className='main-content' data-testid='main'>
        <Header />
        <DesignList />
        <Footer />
      </main>
    </div>
  );
}
export default Main;