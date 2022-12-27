/* eslint-disable no-undef */
import * as React from 'react';
import { ClinicType } from '../models/ClinicType.enum';

type ClinicTimeProps = {
  clinicTime: ClinicTimes[];
  clinicPeriod: ClinicPeriod[];
  doctors: Doctor[];
};

const ClinicTime: React.FC<ClinicTimeProps> = ({ clinicTime, clinicPeriod, doctors }) => {
  return (
    <div className="table-container container clinicTime">
      <table className="table">
        <thead className="header bg-primary fw-bold">
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
          {clinicPeriod &&
            clinicPeriod?.map((period) => (
              <tr key={period.name}>
                <td>
                  <p className="fw-bold mb-2">{period.name}</p>
                  <p className="time">{period.openTime}</p>
                  <p className="time my-1">|</p>
                  <p className="time">{period.closeTime}</p>
                </td>
                {clinicTime &&
                  clinicTime[period.index].map((data, idx) =>
                    data ? (
                      <td className="work fw-bold" key={idx}>
                        <a>
                          {data.clinicType === ClinicType.OwnExpense
                            ? '○'
                            : data.clinicType === ClinicType.TimeAdjust
                            ? '△'
                            : ''}
                          {doctors.find((doctor) => doctor.id === data.doctorId)?.name}
                        </a>
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
      <div className="d-flex justify-content-md-end justify-content-start">
        <div className="remarks my-md-3 my-2">
          <p className="mb-2">△: 看診時間調整為14:00-17:00</p>
          <p>○: 自費約診</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicTime;
