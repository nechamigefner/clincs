import React from "react";

const PatientPopup = ({ patientData }) => {
  return (
    <div>
      <h2>Patient Information</h2>
      <div>
        <p><strong>First Name:</strong> {patientData.First_name}</p>
        <p><strong>Last Name:</strong> {patientData.Last_name}</p>
        <p><strong>Date of Birth:</strong> {patientData.Date_of_birth}</p>
        <p><strong>Identity Card:</strong> {patientData.Identity_card}</p>
        <p><strong>Address:</strong> {patientData.Address_building_number} {patientData.Address_street}, {patientData.City}</p>
        <p><strong>Mobile Phone:</strong> {patientData.Mobile_phone}</p>
        <p><strong>Phone:</strong> {patientData.Phone}</p>
        <p><strong>Sick Date:</strong> {patientData.Sick_date}</p>
        <p><strong>Vaccine 1 Date:</strong> {patientData.Vaccine_1_date}</p>
        <p><strong>Vaccine 1 Manufacturer:</strong> {patientData.Vaccine_1_manufacturer}</p>
        <p><strong>Vaccine 2 Date:</strong> {patientData.Vaccine_2_date}</p>
        <p><strong>Vaccine 2 Manufacturer:</strong> {patientData.Vaccine_2_manufacturer}</p>
        <p><strong>Vaccine 3 Date:</strong> {patientData.Vaccine_3_date}</p>
        <p><strong>Vaccine 3 Manufacturer:</strong> {patientData.Vaccine_3_manufacturer}</p>
        <p><strong>Vaccine 4 Date:</strong> {patientData.Vaccine_4_date}</p>
        <p><strong>Vaccine 4 Manufacturer:</strong> {patientData.Vaccine_4_manufacturer}</p>
      </div>
    </div>
  );
};

export default PatientPopup;
