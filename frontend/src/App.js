
import React from "react";
import PatientForm from "./components/createPatient";
import api from "./components/services";

function createPatient()
{
  const handleSubmit = async (patientData) => {
    try {
       await api.createPatient(patientData);
    } catch (error) {
      console.error("Error creating patient:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <PatientForm onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
}

export default createPatient;