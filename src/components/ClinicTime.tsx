/* eslint-disable no-undef */
import * as React from 'react';

type ClinicTimeProps = {
  clinicTime: Doctor[][];
  clinicPeriod: ClinicPeriod[];
};

// eslint-disable-next-line no-undef
const ClinicTime: React.FC<ClinicTimeProps> = ({ clinicTime, clinicPeriod }) => {
  console.log(clinicTime, clinicPeriod);
  return (
    <div className="table-container">
      <table className="clinic_time-table">
        <thead className="header bg-secondary fw-bold">
          <tr>
            <th>星期</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>日</th>
          </tr>
        </thead>
        <tbody className="body">
          {clinicPeriod.map((period) => (
            <tr key={period.name}>
              <td>
                <p className="fw-bold mb-2">{period.name}</p>
                <p className="time">{period.openTime}</p>
                <p className="time my-1">|</p>
                <p className="time">{period.closeTime}</p>
              </td>
              {clinicTime[period.index].map((time, idx) =>
                time ? (
                  <td className="work fw-bold" key={idx}>
                    <a>{time?.name}</a>
                  </td>
                ) : (
                  <td className="break" key={idx}>
                    休診
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicTime;
