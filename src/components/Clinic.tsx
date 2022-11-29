import * as React from 'react';
import { useState } from 'react';
import ClinicTime from './ClinicTime';

// eslint-disable-next-line no-undef
const Clinic: React.FC<{ clinics: Clinic[] }> = ({ clinics }) => {
  console.log(clinics);
  const [currentClinic, setCurrentClinic] = useState(clinics[0]);
  return (
    <div className="d-flex justify-content-center flex-md-row flex-column">
      <div>
        {clinics.map((clinic) => {
          const isActive = currentClinic.id === clinic.id;
          return (
            <div
              className={`clinicSwitcher ${isActive ? 'active' : ''}`}
              key={clinic.id}
              onClick={() => setCurrentClinic(clinic)}>
              {clinic.name}
            </div>
          );
        })}
      </div>
      <div>
        <ClinicTime
          clinicPeriod={currentClinic.clinicPeriod}
          clinicTime={currentClinic.clinicTime}
        />
      </div>
    </div>
  );
};

export default Clinic;
