import * as React from 'react';
import MediumTitle from './MediumTitle';

// eslint-disable-next-line no-undef
const Doctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const expertises = [
    {
      title: '專看排球人',
      description:
        '林子青醫師打排球已經超過15年，對於排球員的動作及運動傷害都十分熟悉，亦有不少治療國手的經驗！排球人常見的問題，無論是肩痛、落枕、腰痛、膝痛、腳踝扭傷等等，林醫師都很有治療經驗。'
    },
    {
      title: '徒手針灸',
      description:
        '各種運動傷害、筋骨急慢性痠痛、頭痛、落枕、頸椎痛、肩痛、肩夾擠、手肘手腕扭傷、手指吃蘿蔔、閃到腰、腰部扭傷、髖關節疼痛、退化性關節炎、膝痛、腳踝扭傷等。'
    },
    {
      title: '整體結構調理',
      description:
        '融會貫通中西醫知識，發展出獨樹一格的手法，用整體宏觀的視野看待人體，並重視醫病雙方協力合作，進而取得最佳療效。'
    },
    {
      title: '體質調理',
      description: ''
    },
    {
      title: '體重管理',
      description: ''
    },
    {
      title: '靈氣療癒',
      description:
        '靈氣可以療癒過去的創傷，清理、淨化負面的能量場，透過純淨的光與無條件的愛，幫助我們找回自己的內在力量，感受平安喜悅與富足。'
    }
  ];
  return (
    <div className="doctor">
      <div className="container">
        <div className="d-md-flex justify-content-center align-items-center d-block">
          <div className="d-md-block d-flex flex-row-reverse justify-content-between align-items-end mx-md-0 mx-3">
            <div className="clinic d-flex mb-2">
              {doctor.clinics.map((clinic, idx) => (
                <p key={idx}>{clinic}</p>
              ))}
            </div>
            <h3 className="doctor-name mb-2">
              {doctor.name} <span className="doctor-position">{doctor.position}</span>
            </h3>
          </div>
          <div className="profile-image">
            <img src={doctor.image} alt="醫師形象照" />
          </div>
        </div>
      </div>
      <div className="doctor-info">
        <div className="container">
          <div className="d-md-flex justify-content-center d-block mx-md-0 mx-3">
            <div className="info">
              <h5 className="class">學經歷</h5>
              <ul className="list">
                {doctor.experiences.map((experience, idx) => (
                  <li className="item" key={idx}>
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <h5 className="class">主治項目</h5>
              <ul className="list">
                {doctor.expertises.map((expertise, idx) => (
                  <li className="item" key={idx}>
                    {expertise}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <h5 className="class">特別專長</h5>
              <ul className="list">
                {doctor.specialExpertises.map((specialExpertise, idx) => (
                  <li className="item" key={idx}>
                    {specialExpertise}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="doctor-expertise">
          <MediumTitle text="醫師專長" color="primary" isShowLogo={true} />
          <div className="container">
            <div className="row g-3">
              {expertises.map((expertise, index) => (
                <div className="col-md-4 col-12" key={index}>
                  <div className="expertise">
                    <h4 className="title">{expertise.title}</h4>
                    <p className="description">{expertise.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
