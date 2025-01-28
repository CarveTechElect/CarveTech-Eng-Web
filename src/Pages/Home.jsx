import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.css';
import background from './back5.jpeg';
import slideLogo from './Logos.png';
import html from './HTML.png';
import css from './CSS.png';
import javascript from './JavaScript.png';
import python from './Python.png';
import word from './Word.png';
import excel from './Excel.png';
import powerpoint from './PowerPoint.png';
import solar from './Solar.png';
import toolbag from './ToolBag.png';
import keyboard from './KeyboardProf.png';
import arduino from './Arduino.png';
import cplus from './C++.png';
import csharp from './CSharp.png';
import mysql from './MySQL.png';
import reactlogo from './ReactLogo.png';

const HomePage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    details: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'carvetech_request', // Replace with your EmailJS service ID
        'carvetech_request_id', // Replace with your EmailJS template ID
        formData,
        'carvetech2@gmail.com' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your request has been sent!');
          setFormData({ name: '', email: '', address: '', details: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send your request. Please try again.');
        }
      );
  };

  return (
    <div className="body-container">
      <div className="body-text-container">
        <span className="body-text1">Technology</span>
        <span className="body-text2">...the Future of Engineering</span>
      </div>
      <div className="image-wrapper">
        <img src={background} className="back-image" alt="Engineering Pattern" />
      </div>
      <div className="slideContainer">
        <div className="slideContent">
          <img src={slideLogo} className="slide-logo" alt="CarveTech Logo" />
          <p className="slide-text">
            CarveTech Engineering focuses on achieving client satisfaction in Electrical, Computer
            and Solar installation and maintenance services. We are actively ready to bring
            technology with style. Our aim is to follow all necessary procedures to meet standards,
            installation safety for both we and users alike. Thanks for your patronage.
          </p>
        </div>
      </div>
      <p className="services">...Our Services</p>
      <div className="label-container2">
        <div className="label-title-container">
          <p className="label-title">FIELD SERVICES</p>
        </div>
        <div className="courses-set">
          <img src={toolbag} className="courses" alt="electrical" />
          <img src={solar} className="courses" alt="solar" />
        </div>
        <div className="label-section2">
          <p className="label-text2">Electrical Installation and Maintenance</p>
          <p className="label-text2">Solar Installation and Maintenance</p>
        </div>
      </div>

      <p className="services">...Our Training Courses</p>

      <div className="label-container">
        <div className="label-section">
          <p className="label-text">Microsoft Office Word</p>
          <p className="label-text">Microsoft Office Excel</p>
          <p className="label-text">Microsoft Office PowerPoint</p>
          <p className="label-text">Keyboard Proficiency</p>
        </div>

        <div className="courses-set">
          <img src={word} className="courses" alt="word" />
          <img src={excel} className="courses" alt="excel" />
          <img src={powerpoint} className="courses" alt="powerpoint" />
          <img src={keyboard} className="courses" alt="keyboard" />
        </div>
        <div className="label-title-container">
          <p className="label-title">OFFICE COURSES</p>
        </div>
      </div>

      <div className="label-container2">
        <div className="label-title-container">
          <p className="label-title">BASIC CODING COURSES</p>
        </div>
        <div className="courses-set">
          <img src={html} className="courses" alt="html" />
          <img src={css} className="courses" alt="css" />
          <img src={javascript} className="courses" alt="js" />
          <img src={python} className="courses" alt="python" />
          <img src={reactlogo} className="courses" alt="react" />
        </div>
        <div className="label-section2">
          <p className="label-text2">HTML</p>
          <p className="label-text2">CSS</p>
          <p className="label-text2">JavaScript</p>
          <p className="label-text2">Python</p>
          <p className="label-text2">React</p>
        </div>
      </div>

      <div className="label-container">
        <div className="label-section">
          <p className="label-text">C++</p>
          <p className="label-text">C#</p>
          <p className="label-text">Arduino</p>
          <p className="label-text">MySQL</p>
        </div>

        <div className="courses-set">
          <img src={cplus} className="courses" alt="cplus" />
          <img src={csharp} className="courses" alt="csharp" />
          <img src={arduino} className="courses" alt="arduino" />
          <img src={mysql} className="courses" alt="mysql" />
        </div>
        <div className="label-title-container">
          <p className="label-title">ADVANCED CODING COURSES</p>
        </div>
      </div>

      <div className="request-container">
        <span className="request-heading">Request a Quote</span>
        <div className="request-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="text-area"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="text-area"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="text-area"
              required
            />
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              cols={30}
              rows={20}
              className="text-area"
              placeholder="Enter request details"
              required
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
