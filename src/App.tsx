import React from "react";
import "./App.scss";
import Clinic from "./components/Clinic";
import Header from "./components/Header";

const clinics: Clinic[] = [
  {
    isHome: true,
    name: "總店",
    address: "",
    tel: "",
    images: [],
    clinicTime: {
      monA: "林",
      monM: "林",
      tueA: "林",
      tueN: "林",
      thuM: "林",
      thuN: "林",
      friM: "林",
      friA: "林",
      satM: "林",
    } as ClinicTime,
  },
];

const App = () => {
  return (
    <div className="App container">
      <Header />
      <div className="container">
        <Clinic clinics={clinics} />
      </div>
    </div>
  );
};

export default App;
