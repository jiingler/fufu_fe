import Clinic from '../components/Clinic';
import News from '../components/News';
import SectionTitle from '../components/SectionTitle';

// eslint-disable-next-line no-undef
const doctor: Doctor = {
  id: 'ABC000',
  name: '林子青'
};
// eslint-disable-next-line no-undef
const clinics: Clinic[] = [
  {
    id: 'fufu',
    isHome: true,
    name: '福福堂',
    address: '高雄市ooooooooooooo',
    tel: '07-123-5678',
    images: [],
    clinicPeriod: [
      { index: 0, name: '早上', openTime: '9:00', closeTime: '12:00' },
      { index: 1, name: '下午', openTime: '14:00', closeTime: '17:00' },
      { index: 2, name: '晚上', openTime: '18:00', closeTime: '21:00' }
    ],
    clinicTime: [
      [doctor, null, null, doctor, doctor, doctor, null],
      [doctor, doctor, null, null, doctor, null, null],
      [null, doctor, null, doctor, null, null, null]
    ]
  }
  // {
  //   id: 'fufu2',
  //   isHome: false,
  //   name: '二店',
  //   address: '高雄市xxxxxxxxxxxx',
  //   tel: '07-123-4567',
  //   images: [],
  //   clinicPeriod: [
  //     { index: 0, name: '早上', openTime: '9:00', closeTime: '12:00' },
  //     { index: 1, name: '下午', openTime: '14:00', closeTime: '17:00' },
  //     { index: 2, name: '晚上', openTime: '18:00', closeTime: '21:00' }
  //   ],
  //   clinicTime: [
  //     [doctor, doctor, null, null, doctor, null, null],
  //     [null, doctor, null, doctor, null, null, null],
  //     [doctor, null, null, doctor, doctor, doctor, null]
  //   ]
  // }
];

const Home = () => {
  return (
    <>
      <News />
      <div className="container">
        <SectionTitle text={'門診時間'} />
        <Clinic clinics={clinics} />
        <SectionTitle text={'最新文章'} />
        <SectionTitle text={'預約'} />
        {/* 可能預約直接放在header更好 */}
      </div>
    </>
  );
};

export default Home;
