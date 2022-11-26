import Clinic from '../components/Clinic';
import MediumTitle from '../components/MediumTitle';
import News from '../components/News';

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

const Home = () => {
  return (
    <>
      <News />
      <MediumTitle text={'最新文章'} />
      <MediumTitle text={'門診時間'} />
      <Clinic clinics={clinics} />
      <MediumTitle text={'預約'} />
    </>
  );
};

export default Home;
