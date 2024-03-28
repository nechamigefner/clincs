import React, { useState } from "react";
import PatientPopup from "./patientPopup";


const GetPatientById = ({ updatePatientData }) => {
    const [ID, setID] = useState("");
    const [patientData, setPatientData] = useState(null);

    const handleInputChange = (e) => {
        setID(e.target.value);
    };

    const getPatient = async () => {
        const idPattern = /^\d{9}$/;
        if (!idPattern.test(ID)) {
            alert(`Invalid Identity_card: ${ID}`);
            return;
        }
        console.log("Getting patient data for ID:", ID);
        try {
            const data = await fetchPatientData(ID);
            console.log("Received patient data:", data);
            // if (data) {
            //     setPatientData(data);
            //     updatePatientData(data);
            // }
        } catch (error) {
            console.error("Error fetching patient data:", error.message);
        }
    };

    const fetchPatientData = async (id) => {
        try {
            console.log("Fetching patient data, id:", id);
            const response = await fetch(`http://localhost:9000/getPatientData/${id}`);
            if (response.status == 404) {
                alert("Patient doesn't exist");
            } else if (response.status == 500) {
                alert("The internet connection is weak");
                throw new Error("Failed to fetch patient data");
            }
            const data = await response.json();
            if (data) {
                setPatientData(data);
                updatePatientData(data);
            }
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <div>
            <input className="input-field" type="text" onChange={handleInputChange} placeholder="Insert ID" />
            <button className="button" onClick={getPatient}>Get Information</button>
            {/* {patientData && (
                <PatientPopup patientData={patientData} />
            )} */}
        </div>
    );
};

export default GetPatientById;

