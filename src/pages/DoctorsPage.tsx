import * as React from 'react';
import { useEffect, useState } from 'react';
import ClinicSwitcher from '../components/ClinicSwitcher';
import Doctor from '../components/Doctor';
import { AppService } from '../services/app.service';

// eslint-disable-next-line no-undef
const DoctorsPage: React.FC<{}> = () => {
  // eslint-disable-next-line no-undef
  const [currentClinic, setCurrentClinic] = useState<Clinic | undefined>();
  const [doctors, setDoctors] = useState<Doctor[] | undefined>();
  // eslint-disable-next-line no-undef
  const [clinics, setClinics] = useState<Clinic[] | undefined>();

  const appService = new AppService();

  const getAllClinics = async () => {
    // eslint-disable-next-line no-undef
    return await appService.get<Clinic[]>('Clinic', null);
  };

  const getAllDoctors = async () => {
    // eslint-disable-next-line no-undef
    return await appService.get<Doctor[]>('Doctor', null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const doctors = await getAllDoctors();
      setDoctors([...doctors]);
      const clinics = await getAllClinics();
      setClinics([...clinics]);
      setCurrentClinic(clinics[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="page container">
      {clinics && clinics.length > 1 && (
        <div className="d-flex justify-content-md-center justify-content-start my-5 text-center">
          <ClinicSwitcher
            currentClinic={currentClinic}
            setCurrentClinic={setCurrentClinic}
            clinics={clinics}
            isPhoneModeSelect={true}
          />
        </div>
      )}
      {doctors && doctors.map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
    </div>
  );
};

export default DoctorsPage;
