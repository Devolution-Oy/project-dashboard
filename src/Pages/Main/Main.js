import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ListItem from '../../components/ListItem/ListItem';

function Main() {
  return (
    <div>
      <main className='main-content'>
        <Header />
        <ListItem />
        <Footer />
      </main>
    </div>
  );
}
export default Main;