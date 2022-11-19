import * as React from "react";

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
            <td>{clinicTime.monM}</td>
            <td>{clinicTime.tueM}</td>
            <td>{clinicTime.wedM}</td>
            <td>{clinicTime.thuM}</td>
            <td>{clinicTime.friM}</td>
            <td>{clinicTime.satM}</td>
            <td>{clinicTime.sunM}</td>
          </tr>
          <tr>
            <td>午</td>
            <td>{clinicTime.monA}</td>
            <td>{clinicTime.tueA}</td>
            <td>{clinicTime.wedA}</td>
            <td>{clinicTime.thuA}</td>
            <td>{clinicTime.friA}</td>
            <td>{clinicTime.satA}</td>
            <td>{clinicTime.sunA}</td>
          </tr>
          <tr>
            <td>晚</td>
            <td>{clinicTime.monN}</td>
            <td>{clinicTime.tueN}</td>
            <td>{clinicTime.wedN}</td>
            <td>{clinicTime.thuN}</td>
            <td>{clinicTime.friN}</td>
            <td>{clinicTime.satN}</td>
            <td>{clinicTime.sunN}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ClinicTime;
