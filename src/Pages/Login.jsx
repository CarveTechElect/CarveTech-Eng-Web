import React, { useState } from "react";
import './Login.css';

const LoginPage = () => {
    // State to manage input values and errors
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Function to validate email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form reload

        // Validation checks
        if (!email || !password) {
            setError("Please fill out both fields.");
        } else if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError(""); // Clear errors if validation passes
            console.log("Login Successful");
            // Add further logic (e.g., API calls) here
        }
    };

    return (
        <div className="login-main-container">
            <form onSubmit={handleSubmit}>
                <div className="login-form-container">
                    {/* Email Input */}
                    <input
                        type="text"
                        className="login-name"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* Password Input */}
                    <input
                        type="password"
                        className="login-password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* Error Message */}
                    {error && <div className="error-message">{error}</div>}
                    {/* Submit Button */}
                    <input type="submit" className="submit-button" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
