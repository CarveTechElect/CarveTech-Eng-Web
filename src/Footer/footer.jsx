import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import facebook from './Facebook.png';
import instagram from './Instagram.png';
import linkedin from './LinkedIn.png';
import youtube from './Youtube.png';
import whatsapp from './WhatsApp.png';

function footer() {
    return (
       <div className="footer-container">

        <div className="page-links">

        <span className="heading">Quick Links:</span>
                <nav className="links-list">
                    <Link to="/" className="footer-links">Home</Link>
                    <Link to="/GalleryPage" className="footer-links">Gallery</Link>
                    <Link to="/AboutPage" className="footer-links">About</Link>
                </nav>
            
        </div>

        <div className="address-container">
            <span className="heading">
                Head Office:
            </span>
            <span className="content">
                103b Yemi Alimi Street, <br />
                Ori-Okuta, <br />
                Owutu, Ikorodu, <br />
                Lagos State
            </span>
        </div>

        <div className="telephone-container">
            <span className="heading">
                Telephone:
            </span>
            <span className="content">
                08094683329 <br />
                07088642775 <br />
                07026980888 <br />
                08115067339
            </span>
        </div>

        <div className="email-container">
            <span className="heading">
                Email:
            </span>
            <span className="content">
                carvetech2@gmail.com <br />
                carvetechcomputertutorial@yahoo.com <br />
                jacoeelectricalworks@gmail.com <br />
                jacoeelectricalworks@yahoo.com
            </span>
        </div>

        <div className="social-container">
                <span className="heading">Social Handles:</span>
                <div className="content-socials">
                    <a href="https://wa.me/2348094683328" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="whatsapp" className="socials" />
                    </a>
                    <a href="https://www.facebook.com/carvetechengineering" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" className="socials" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/carvetecheng" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="socials" />
                    </a>
                    <a href="https://www.youtube.com/@carvetechengineering" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="youtube" className="socials" />
                    </a>
                    <a href="https://www.instagram.com/carvetech2?igsh=MXZ4MnZtoWJIeThz" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram" className="socials" />
                    </a>
                </div>
            </div>
       </div>
    )
}

export default footer;