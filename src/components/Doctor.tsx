import * as React from 'react';

// eslint-disable-next-line no-undef
const Doctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="row">
      <div className="profile-image col-md-6 col-12 d-md-block d-none">
        <img src={doctor.image} alt="醫師形象照" />
      </div>
      <div className="doctor col-md-6 col-12 ps-md-4">
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
        <div className="profile-image col-md-6 col-12 d-md-none d-block">
          <img src={doctor.image} alt="醫師形象照" />
        </div>
        <div className="doctor-info row mx-md-0 mx-3">
          <div className="d-md-flex align-items-start d-block p-0 mb-md-0 mb-3">
            <h5 className="class mb-2">學經歷</h5>
            <ul className="d-md-inline-block d-block ms-md-2 my-md-2 m-3">
              {doctor.experiences.map((experience, idx) => (
                <li className="item" key={idx}>
                  {experience}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-md-flex align-items-start d-block p-0 mb-md-0 mb-3">
            <h5 className="class mb-2">主治項目</h5>
            <ul className="d-md-inline-block d-block ms-md-2 my-md-2 m-3">
              {doctor.expertises.map((expertise, idx) => (
                <li className="item" key={idx}>
                  {expertise}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-md-flex align-items-start d-block p-0 mb-md-0 mb-3">
            <h5 className="class mb-2">特別專長</h5>
            <ul className="d-md-inline-block d-block ms-md-2 my-md-2 m-3">
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
  );
};

export default Doctor;
