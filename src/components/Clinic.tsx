import * as React from 'react';
import { useEffect, useState } from 'react';
import { AppService } from '../services/app.service';
import ClinicSwitcher from './ClinicSwitcher';
import ClinicTime from './ClinicTime';

// eslint-disable-next-line no-undef
const Clinic = () => {
  // eslint-disable-next-line no-undef
  const [clinics, setClinics] = useState<Clinic[]>([]);
  // eslint-disable-next-line no-undef
  const [currentClinic, setCurrentClinic] = useState<Clinic>();

  const appService = new AppService();

  const getAllClinics = async () => {
    // eslint-disable-next-line no-undef
    return await appService.get<Clinic[]>('Clinic', null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const clinics = await getAllClinics();
      setClinics([...clinics]);
      setCurrentClinic({ ...clinics[0] });
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-md-row flex-column">
      <div>
        <ClinicSwitcher
          currentClinic={currentClinic}
          setCurrentClinic={setCurrentClinic}
          clinics={clinics}
        />
      </div>
      <div>
        <ClinicTime
          clinicPeriod={currentClinic?.clinicPeriod}
          clinicTime={currentClinic?.clinicTime}
        />
      </div>
    </div>
  );
};

export default Clinic;
