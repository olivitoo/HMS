import React, { useState } from 'react';
import api from './services'; // adjust the import path as needed

function PatientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // add other fields as needed
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Define handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.createPatient(formData);
      console.log('Patient created:', response);
      setSuccess(true);
      // Reset form or redirect here
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      setError(err.message || 'Failed to create patient');
      console.error('Error creating patient:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {success && <div style={{ color: 'green' }}>Patient created successfully!</div>}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Patient'}
      </button>
    </form>
  );
}

export default PatientForm;