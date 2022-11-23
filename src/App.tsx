import React from 'react';
import './App.scss';
import Clinic from './components/Clinic';
import Footer from './components/Footer';
import Header from './components/Header';
import MediumTitle from './components/MediumTitle';
import News from './components/_News';

// eslint-disable-next-line no-undef
const clinics: Clinic[] = [
  {
    isHome: true,
    name: '總店',
    address: '',
    tel: '',
    images: [],
    clinicTime: {
      monA: '林',
      monM: '林',
      tueA: '林',
      tueN: '林',
      thuM: '林',
      thuN: '林',
      friM: '林',
      friA: '林',
      satM: '林'
    }
  }
];

const App = () => {
  return (
    <div className="App position-relative">
      <Header />
      <div className="body">
        <News />
        <MediumTitle text={'最新文章'} />
        <MediumTitle text={'門診時間'} />
        <Clinic clinics={clinics} />
        <MediumTitle text={'預約'} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
