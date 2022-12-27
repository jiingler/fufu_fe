import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import chineseMedicine from '../assets/images/chinese-medicine.jpg';
import message from '../assets/images/massage.jpeg';
import acupuncture from '../assets/images/acupuncture.jpg';
import exercise from '../assets/images/exercise.jpg';
import meditation from '../assets/images/meditation.jpg';
import MediumTitle from '../components/MediumTitle';

const HomePage = () => {
  const navigate = useNavigate();
  const services = [
    { name: '經方中醫', imageUrl: chineseMedicine },
    { name: '古典針灸', imageUrl: acupuncture },
    { name: '整體結構調理', imageUrl: message },
    { name: '運動醫學', imageUrl: exercise },
    { name: '靈氣療癒', imageUrl: meditation }
  ];

  const notices = [
    {
      id: '001',
      title: '福福堂慶開幕活動',
      clinicId: 'fufu',
      image: ''
    },
    {
      id: '002',
      title: '掛號須知',
      clinicId: 'fufu',
      image: ''
    },
    {
      id: '003',
      title: '自費門診掛號',
      clinicId: 'fufu',
      image: ''
    }
  ];

  return (
    <>
      <div className="home-bg">
        <div className="container home-bg-info">
          <h2 className="home-title mb-2">歡迎來到福福堂中醫</h2>
          <p className="home-subtitle mb-4">以整體宏觀的視野看待人體，並重視醫病雙方協力合作</p>
          <Button
            type="primary"
            text="查看門診時間＆預約"
            isOutlined={false}
            callback={() => navigate('/Clinics')}
            iconName="arrow_circle_right"
          />
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container block-margin-top">
        <MediumTitle text="最新消息" color="primary" isShowLogo={true} />
        <div className="billboard px-2">
          {notices.map((notice) => (
            <div
              className="notice d-flex justify-content-between align-items-center py-md-4 py-3 px-md-3 px-1"
              key={notice.id}>
              <div>
                <p className="notice-title">
                  {notice.title}
                  <span> | {notice.clinicId}</span>
                </p>
                <p className="notice-date mt-1">公告日期：2022-12-24</p>
              </div>
              <p className="notice-more">
                查看更多<span className="material-icons ms-1">arrow_circle_right</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="services block-margin-top py-md-4 py-3">
        <MediumTitle text="服務介紹" color="white" isShowLogo={true} />
        <div className="container d-md-flex justify-content-between d-block">
          {services.map((service, index) => (
            <div className="service py-md-4 py-3" key={index}>
              <div className="image-container px-md-3 px-0">
                <img src={service.imageUrl} alt={service.name} />
              </div>
              <p className="mt-3">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
