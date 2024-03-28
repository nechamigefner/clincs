function validatePatientData(data){
    const requiredFields = [
        "First_name", "Last_name", "Identity_card", "City",
        "Address_street", "Address_building_number", "Date_of_birth",
        "Mobile_phone",
        // "Phone"
    ];
    const dateFields = ["Date_of_birth", "Vaccine_1_date", "Vaccine_2_date", "Vaccine_3_date", "Vaccine_4_date", "Sick_date", "Recovery_date"];
    const alphabeticFields = ["First_name", "Last_name", "City", "Address_street", "Vaccine_1_manufacturer", "Vaccine_2_manufacturer", "Vaccine_3_manufacturer", "Vaccine_4_manufacturer"]
    const numbersFilds = ["Identity_card", "Address_building_number", "Phone", "Mobile_phone"]
    const alphabeta = /^[A-Za-z\s]+$/;
    const phonePattern = /^0\d{9}$|^0\d{8}$/;
    const mobilePhonePattern = /^05\d{8}$/;
    const idPattern = /^\d{9}$/;


    if (!data) {
        return { valid: false, message: "Patient data is missing." };
    }
    console.log(data);
    console.log(data.patient);
    console.log(data.patient.First_name);

    for (const field of requiredFields) {
        console.log(data.patient[field], field)
        if (!(data.patient[field])) {
            return { valid: false, message: `Field '${field}' is missing.` };
        }
    }


    // for (const dateField of dateFields) {
    //     if (data.patient[dateField].length !== 10 || data.patient[dateField][2] !== '/' || data.patient[dateField][5] !== '/' || data.patient[dateField][0,2] < 1 || data.patient[dateField][0,2] > 31 || data.patient[dateField][3,5] < 1 || data.patient[dateField][3,5] > 12 || data.patient[dateField][6,10] < 1000 || data.patient[dateField][6,10] > 9999) {
    //         return { valid: false, message: `Invalid date format for '${dateField}', please write in format: 'dd-mm-yyyy'` };
    //     }
    // }

    for (const alphabeticField of alphabeticFields) {

        if (data.patient[alphabeticField] && !alphabeta.test(data.patient[alphabeticField])) {
            return { valid: false, message: `${alphabeticField} must contain only alphabetic characters.` };
        }
    }

    
    if (!phonePattern.test(data.patient['Phone'])) {
        return { valid: false, message: `Invalid Phone: `};
    }
    
    if (!mobilePhonePattern.test(data.patient['Mobile_phone'])) {
        return { valid: false, message: `Invalid Mobile Phone: ` };
    }

    if (!idPattern.test(data.patient['Identity_card'])) {
        return { valid: false, message: `Invalid Identity_card: ` };
    }
    
    
    return { valid: true, message: "Validation successful." };
}

export default validatePatientData; 


