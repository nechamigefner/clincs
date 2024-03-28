import React, { Component } from "react";
import "./App.css";
import PatientForm from "./components/PatientForm";
import GetPatientById from "./components/GetPatientById";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initial patient data state
            patient: {
                First_name: "",
                Last_name: "",
                Identity_card: "",
                City: "",
                Address_street: "",
                Address_building_number: "",
                Date_of_birth: "",
                Phone: "",
                Mobile_phone: "",
                Vaccine_1_date: "",
                Vaccine_1_manufacturer: "",
                Vaccine_2_date: "",
                Vaccine_2_manufacturer: "",
                Vaccine_3_date: "",
                Vaccine_3_manufacturer: "",
                Vaccine_4_date: "",
                Vaccine_4_manufacturer: "",
                Sick_date: "",
                Recovery_date: ""
            }
        };
    }
    
    updatePatientData = (data) => {
        this.setState({ patient: data });
    };
    

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <GetPatientById updatePatientData={this.updatePatientData} />
                <PatientForm updatePatientData={this.updatePatientData} patientData={this.state.patient}/>
            </div>
        );
    }
}

export default App;

