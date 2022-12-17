import Clinic from '../components/Clinic';
import News from '../components/News';
import SectionTitle from '../components/SectionTitle';

// eslint-disable-next-line no-undef
// const doctor: Doctor = {
//   id: '001',
//   name: '林子青',
//   clinics: ['福福堂'],
//   position: '院長',
//   experiences: [
//     '長庚大學中西醫雙主修畢業',
//     '福山雲玖中醫診所',
//     '詠仁中醫診所院長',
//     '萬丹中醫診所醫師',
//     'C級健身教練/肌內效貼紮認證',
//     '體重管理師執照',
//     '台灣芳療協會認證',
//     '靈氣療癒師認證'
//   ],
//   expertises: [
//     '感冒、耳鼻喉疾病',
//     '急慢性運動傷害、慢性疼痛、落枕、高低肩、骨盆不正',
//     '睡眠障礙、失眠、慢性疲勞',
//     '經痛、月經不調、更年期症候群',
//     '小兒厭食、便秘、腹瀉、胃食道逆流、腸胃炎',
//     '呼吸道症候群、過敏性鼻炎、皮膚炎、濕疹',
//     '代謝性症候群、三高慢性病'
//   ],
//   specialExpertises: ['自費減重', '體重管理', '靈氣療程'],
//   image:
//     'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
// };
// eslint-disable-next-line no-undef
// const clinics: Clinic[] = [
//   {
//     id: 'fufu',
//     isHome: true,
//     name: '福福堂',
//     address: '高雄市ooooooooooooo',
//     tel: '07-123-5678',
//     images: [],
//     clinicPeriod: [
//       { index: 0, name: '早上', openTime: '9:00', closeTime: '12:00' },
//       { index: 1, name: '下午', openTime: '14:00', closeTime: '17:00' },
//       { index: 2, name: '晚上', openTime: '18:00', closeTime: '21:00' }
//     ],
//     clinicTime: [
//       [doctor, null, null, doctor, doctor, doctor, null],
//       [doctor, doctor, null, null, doctor, null, null],
//       [null, doctor, null, doctor, null, null, null]
//     ]
//   }
//   // {
//   //   id: 'fufu2',
//   //   isHome: false,
//   //   name: '二店',
//   //   address: '高雄市xxxxxxxxxxxx',
//   //   tel: '07-123-4567',
//   //   images: [],
//   //   clinicPeriod: [
//   //     { index: 0, name: '早上', openTime: '9:00', closeTime: '12:00' },
//   //     { index: 1, name: '下午', openTime: '14:00', closeTime: '17:00' },
//   //     { index: 2, name: '晚上', openTime: '18:00', closeTime: '21:00' }
//   //   ],
//   //   clinicTime: [
//   //     [doctor, doctor, null, null, doctor, null, null],
//   //     [null, doctor, null, doctor, null, null, null],
//   //     [doctor, null, null, doctor, doctor, doctor, null]
//   //   ]
//   // }
// ];

const HomePage = () => {
  // const [doctor, setDoctor] = useState();

  return (
    <>
      <News />
      <div className="container">
        <SectionTitle text={'門診時間'} />
        <Clinic />
        <SectionTitle text={'最新文章'} />
        <SectionTitle text={'預約'} />
        {/* 可能預約直接放在header更好 */}
      </div>
    </>
  );
};

export default HomePage;
