import React, { Component } from "react";
import "./PatientForm.css";
import { render } from "react-dom";
import validatePatientData from "../tools/validation";

class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: props.patientData || {},
        };
        this.input_types = {
            "First_name": "text",
            "Last_name": "text",
            "Identity_card": "text",
            "City": "text",
            "Address_street": "text",
            "Address_building_number": "text",
            "Date_of_birth": "date",
            "Phone": "tel",
            "Mobile_phone": "tel",
            "Vaccine_1_date": "date",
            "Vaccine_1_manufacturer": "text",
            "Vaccine_2_date": "date",
            "Vaccine_2_manufacturer": "text",
            "Vaccine_3_date": "date",
            "Vaccine_3_manufacturer": "text",
            "Vaccine_4_date": "date",
            "Vaccine_4_manufacturer": "text",
            "Sick_date": "date",
            "Recovery_date": "date"
        };
    }
     
    // handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState(prevState => ({
    //         patient: {
    //             ...prevState.patient,
    //             [name]: value
    //         }
    //     }));
    // };
    
    componentDidUpdate(prevProps) {
        if (prevProps.patientData !== this.props.patientData) {
            this.setState({ patient: { ...this.props.patientData } });
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            patient: {
                ...prevState.patient,
                [name]: value
            }
        }), () => {
            // this.props.updatePatientData(this.state.patient);
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Patient data:", this.state);

        const validationResult = validatePatientData(this.state);
        if (!validationResult.valid) {
            alert(validationResult.message);
            return; // Stop submission if validation fails
        }
        // Send patient data to the server
        fetch("http://localhost:9000/submitPatientData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.patient)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to submit patient data");
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            console.log("Server response:", data);
            // Handle server response if needed
        })
        .catch(error => {
            console.error("Error:", error.message);
            // Log response text if available for further investigation
            if (error.response) {
                error.response.text().then(text => console.error("Response text:", text));
            } else {
                console.error("No response received");
            }
            // Handle error if needed
        });
    };

    handleClearForm = () => {
        const updatedPatient = {};
        Object.keys(this.state.patient).forEach(key => {
            updatedPatient[key] = "";
        });
        this.setState({ patient: updatedPatient });
    };

    
    
    render() {
        if (!(this.state.patient)) {
            return null; // or loading indicator or any other fallback UI
        }
        return (
            <div className="patient-form-container">
                <h2 className="form-title">Patient Information Form</h2>
                <form className="patient-form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        {Object.entries(this.state.patient).map(([key, value]) => (
                            key !== "_id" && (
                            <>
                            <div key={key} className="form-group">

                                    <label htmlFor={key} className="form-label">{key.replace(/_/g, " ")}</label>
                                    <input
                                        type={this.input_types[key]}
                                        id={key}
                                        name={key}
                                        value={value}
                                        onChange={this.handleInputChange}
                                        className="form-input"
                                        placeholder={key.replace(/_/g, " ")}
                                        />
                                        <br />
                                        
                                        </div>
                                        {key === "Mobile_phone" && (
                                            <div className="form-g">
                                            <h2 className="form-title" style={{ textAlign: "center" }}>Covid Information</h2>
                                            {/* <h2 className="form-title" style={{ textAlign: "center" }}>Covid Information</h2>
                                        <h2 className="form-title" style={{ textAlign: "center" }}>Covid Information</h2> */}
                                    </div>
                                    )}
                                    </>
                            )
                                    ))}
                    </div>
                    <button type="submit" className="button">Submit</button>
                    <button type="button" className="button" onClick={this.handleClearForm}>Clear</button>
                </form>
            </div>
        );

                
    }
}

export default PatientForm;
