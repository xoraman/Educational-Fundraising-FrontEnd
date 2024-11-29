import React, { useState } from 'react';
import './ApplyScholarship.css';  // Import the CSS file

const ApplyScholarship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eligibility: '',
    amount_required:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div className="bg-gradient flex-center">
      <div className="form-container">
        <h2 className="form-heading">Apply for Scholarship</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="eligibility">Eligibility Criteria</label>
            <textarea
              name="eligibility"
              id="eligibility"
              rows="4"
              className="w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="amount">Amount Required</label>
            <input type='text'
              name="amount"
              id="amount"
              className="w-full"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyScholarship;
