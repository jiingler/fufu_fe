import * as React from 'react';

// eslint-disable-next-line no-undef
const ClinicTime: React.FC<{ clinicTime: ClinicTime }> = ({ clinicTime }) => {
  console.log(clinicTime);
  return (
    <>
      <table className="clinic_time-table">
        <tbody>
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
          <tr>
            <td>早</td>
            <td>{clinicTime.monM ? clinicTime.monM : '休診'}</td>
            <td>{clinicTime.tueM ? clinicTime.tueM : '休診'}</td>
            <td>{clinicTime.wedM ? clinicTime.wedM : '休診'}</td>
            <td>{clinicTime.thuM ? clinicTime.thuM : '休診'}</td>
            <td>{clinicTime.friM ? clinicTime.friM : '休診'}</td>
            <td>{clinicTime.satM ? clinicTime.satM : '休診'}</td>
            <td>{clinicTime.sunM ? clinicTime.sunM : '休診'}</td>
          </tr>
          <tr>
            <td>午</td>
            <td>{clinicTime.monA ? clinicTime.monA : '休診'}</td>
            <td>{clinicTime.tueA ? clinicTime.tueA : '休診'}</td>
            <td>{clinicTime.wedA ? clinicTime.wedA : '休診'}</td>
            <td>{clinicTime.thuA ? clinicTime.tueA : '休診'}</td>
            <td>{clinicTime.friA ? clinicTime.friA : '休診'}</td>
            <td>{clinicTime.satA ? clinicTime.satA : '休診'}</td>
            <td>{clinicTime.sunA ? clinicTime.sunA : '休診'}</td>
          </tr>
          <tr>
            <td>晚</td>
            <td>{clinicTime.monN ? clinicTime.monN : '休診'}</td>
            <td>{clinicTime.tueN ? clinicTime.tueN : '休診'}</td>
            <td>{clinicTime.wedN ? clinicTime.wedN : '休診'}</td>
            <td>{clinicTime.thuN ? clinicTime.thuN : '休診'}</td>
            <td>{clinicTime.friN ? clinicTime.friN : '休診'}</td>
            <td>{clinicTime.satN ? clinicTime.satN : '休診'}</td>
            <td>{clinicTime.sunN ? clinicTime.sunN : '休診'}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ClinicTime;
