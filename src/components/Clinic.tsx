import * as React from 'react';
import ClinicTime from './ClinicTime';
import SmallTitle from './SmallTitle';

// eslint-disable-next-line no-undef
const Clinic: React.FC<{ clinics: Clinic[] }> = ({ clinics }) => {
  console.log(clinics);
  return (
    <>
      {clinics.map((clinic) => (
        <div className="row" key={clinic.id}>
          <div className="col-md-4 col-12">
            <SmallTitle text={`${clinic.name}：`} />
          </div>
          <div className="col-md-8 col-12">
            <ClinicTime clinicTime={clinic.clinicTime} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Clinic;
