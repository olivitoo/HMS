import axios from "axios";  
const API_URL = "http://localhost:8080/api/patients";

const api = {
    createPatient: async (patientData) => {
        const response = await axios.post(API_URL, patientData);
        return response.data;
    }

}

export default api;