import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Item from '../../components/Item/Item';

function Main() {
  return (
    <div>
      <main className='main-content'>
        <Header />
        <Item />
        <Footer />
      </main>
    </div>
  );
}
export default Main;