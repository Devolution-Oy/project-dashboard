import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import DesignProjectItem from '../../components/DesignProjectItem/DesignProjectItem';

function Main() {
  return (
    <div>
      <main className='main-content'>
        <Header />
        <DesignProjectItem />
        <Footer />
      </main>
    </div>
  );
}
export default Main;