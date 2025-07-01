import React, { useState } from 'react';
import Modal from 'react-modal';
import './ScheduleSection.css';
import emailjs from '@emailjs/browser';


Modal.setAppElement('#root'); // Required for accessibility

 const ScheduleSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companySize: '',
    email: '',
    services: '',
    budget: '',
    hearAbout: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'service_upld1bo', // e.g., service_abc123
      'template_gfn2cfa', // e.g., template_xyz456
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_size: formData.companySize,
        email: formData.email,
        services: formData.services,
        budget: formData.budget,
        hear_about: formData.hearAbout,
      },
      'voizISdE6OGZrPT4T' // e.g., your_user_abcdEFGHIJKL
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      },
      (err) => {
        console.log('FAILED...', err);
        alert("Something went wrong. Please try again.");
      }
    );
  };
  
  return (
    <section className="schedule-section">
      <div className="text-area">
        <h2 className="title">
          LET’S DISCUSS HOW WE CAN DRIVE <br />
          GROWTH FOR YOUR BUSINESS
        </h2>
        <p className="subtitle">
          Schedule a call with us today, and let’s explore tailored solutions that fit your unique needs!
        </p>
      </div>
      <div className="button-area">
        <button onClick={() => setModalIsOpen(true)} className="schedule-button">
          SCHEDULE A CALL
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        {!submitted ? (
          <form className="modal-form" onSubmit={handleSubmit}>
            <h2>SCHEDULE A CALL</h2>
            <div className="row">
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            </div>
            <select name="companySize" onChange={handleChange} required>
              <option value="">Select the size of your company</option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>201+</option>
            </select>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <textarea
              name="services"
              placeholder="What services would you like to enquire about?"
              rows={3}
              onChange={handleChange}
              required
            ></textarea>
            <select name="budget" onChange={handleChange} required>
              <option value="">What is your budget?</option>
              <option>₦40,000 - ₦50,000</option>
              <option>₦50,000 - ₦80,000</option>
              <option>₦80,000 - ₦100,000</option>
              <option>₦100,000+</option>
            </select>
            <select name="hearAbout" onChange={handleChange} required>
              <option value="">How did you hear about us</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
            <button type="submit" className="submit-btn">SCHEDULE</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You!</h2>
            <p>We've received your request. We'll be in touch shortly.</p>
            <button onClick={() => setModalIsOpen(false)} className="submit-btn">Close</button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ScheduleSection;
