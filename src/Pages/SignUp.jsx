import React, { useState } from "react";
import "./Signup.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    setError(""); // Clear any existing errors
  
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Form submitted:", formData);
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit the form.");
    }
  };
  

  return (
    <div className="signup-container">
      <h2 className="user-reg-heading">User Registration</h2>
      {submitted ? (
        <div className="thank-you">
          <h3>Thank you for registering!</h3>
          <p>
            Name: {formData.fullname}
            <br />
            Country: {formData.country}
            <br />
            Email: {formData.email}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Repeat Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUp;
