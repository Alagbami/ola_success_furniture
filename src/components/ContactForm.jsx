// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './contactForm.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xayrqlag");
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    phoneNumber: '', // Added phone number field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (state.succeeded) {
    return (
        <div className='all-thank'>
            <h2 className='thanks-msg'>Thanks for Messaging Us 🙌🙏! We'll provide a quick response.</h2>
            <h1 className='number-msg'>Kindly call <span>+234 703 332 9813</span>.</h1> 
        </div>
     )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Your Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Your Number"
        required
      />
      {/* Add any validation for the phone number as needed */}
      
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write Some Messages"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}


export default ContactForm;

