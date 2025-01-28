import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="nav-container">
                <Link to="/" className="link-tag">Home</Link>
               <Link to="/GalleryPage" className="link-tag">Gallery</Link> 
           <Link to="/AboutPage" className="link-tag">About</Link>
          
        </nav>
    );
}

export default Navigation;