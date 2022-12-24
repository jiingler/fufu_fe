import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import chineseMedicine from '../assets/images/chinese-medicine.jpg';
import message from '../assets/images/massage.jpeg';
import acupuncture from '../assets/images/acupuncture.jpg';
import exercise from '../assets/images/exercise.jpg';
import meditation from '../assets/images/meditation.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const services = [
    { name: '經方中醫', imageUrl: chineseMedicine },
    { name: '古典針灸', imageUrl: acupuncture },
    { name: '整體結構調理', imageUrl: message },
    { name: '運動醫學', imageUrl: exercise },
    { name: '靈氣療癒', imageUrl: meditation }
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
            callback={() => navigate('/Clinic')}
            iconName="arrow_circle_right"
          />
        </div>

        <div className="overlay"></div>
      </div>

      <div className="services py-4">
        <div className="container d-md-flex justify-content-between d-block">
          {services.map((service, index) => (
            <div className="service py-4" key={index}>
              <div className="image-container">
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
