import * as React from 'react';
import { useState } from 'react';
import Backdrop from './Backdrop';

type ClinicSwitcherProps = {
  // eslint-disable-next-line no-undef
  clinics: Clinic[];
  // eslint-disable-next-line no-undef
  currentClinic: Clinic;
  // eslint-disable-next-line no-undef
  setCurrentClinic: React.Dispatch<React.SetStateAction<Clinic>>;
  isPhoneModeSelect?: boolean;
};

const ClinicSwitcher: React.FC<ClinicSwitcherProps> = ({
  clinics,
  currentClinic,
  setCurrentClinic,
  isPhoneModeSelect
}) => {
  const [selectedClinic, setSelectedClinic] = useState(clinics[0]);
  const [isExpandOptions, setIsExpandOptions] = useState(false);
  return (
    <>
      {clinics.map((clinic) => {
        const isActive = currentClinic.id === clinic.id;
        return (
          <div
            className={`clinicSwitcher ${isActive ? 'active' : ''} ${
              isPhoneModeSelect ? 'd-md-block d-none' : ''
            }`}
            key={clinic.id}
            onClick={() => setCurrentClinic(clinic)}>
            {clinic.name}
          </div>
        );
      })}
      {/* 下拉式選單 限手機版 */}
      {isPhoneModeSelect && (
        <div className="w-100 d-md-none mx-3">
          <div
            className="clinicSwitcher selected"
            onClick={() => setIsExpandOptions(!isExpandOptions)}>
            <p>{selectedClinic.name}</p>
            {clinics.length > 1 && <span className="material-icons">expand_more</span>}
          </div>
          {isExpandOptions && (
            <>
              <div className="options">
                {clinics?.length > 1 &&
                  clinics.map((clinic) => (
                    <div
                      className="option"
                      key={clinic.id}
                      onClick={() => {
                        setSelectedClinic(clinic);
                        setCurrentClinic(clinic);
                        setIsExpandOptions(false);
                      }}>
                      {clinic.name}
                    </div>
                  ))}
              </div>
              <Backdrop onClick={() => setIsExpandOptions(false)} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ClinicSwitcher;
