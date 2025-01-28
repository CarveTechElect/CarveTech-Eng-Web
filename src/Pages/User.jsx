import React, { useState } from "react";
import './User.css';
import SignUp from "./SignUp";
import LoginPage from "./Login";
import userBack from './Eng1.jpeg';

const UserPage = () => {
    // State to manage which form is visible
    const [activePage, setActivePage] = useState("signup"); // Default is "signup"

    // Function to handle button clicks
    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <div className="main-user-container">
            <div className="user-text-container">
                <span className="user-text1">User Page</span>
            </div>
            <img src={userBack} alt="techno-background" className="user-background" />
            <div className="user-container">
                {/* Buttons to toggle between Sign Up and Sign In */}
                <button
                    className={`sign-up ${activePage === "signup" ? "active" : ""}`}
                    onClick={() => handlePageChange("signup")}
                >
                    Sign Up
                </button>
                <button
                    className={`login ${activePage === "login" ? "active" : ""}`}
                    onClick={() => handlePageChange("login")}
                >
                    Sign In
                </button>
            </div>

            {/* Conditional rendering of components */}
            {activePage === "signup" && <SignUp />}
            {activePage === "login" && <LoginPage />}
        </div>
    );
};

export default UserPage;
