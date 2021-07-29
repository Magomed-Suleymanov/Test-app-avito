import React from 'react';
import MainImages from './Main/MainImages';
import Footer from './Main/Footer';
import { useSelector } from 'react-redux';
import ModalContent from './Modal/ModalContent';
import Header from './Main/Header'

function App() {
  const modalActivity = useSelector((state) => state.modalActivity);

  return (
    <div className="app">
      {modalActivity && <ModalContent />}
      <div className="container">
        <Header />
        <MainImages />
        <Footer />
      </div>
    </div>
  );
}

export default App;
