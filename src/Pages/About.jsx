import React from "react";
import './About.css';
import mission from './Mission1.png';
import request from './Request1.png';
import troubleshoot from './Troubleshooting1.png';
import story from './Story1.gif';
import back3 from './EngPic3.jpg';
import jacob from './Jacob.png';

const AboutPage = () => {
    return(
        <div className="about-container">
        <div className="about-text-container">
        <span className="about-text">About </span>
        <span className="about-text2">CarveTech Engineering</span>
        </div>        
            <img src={back3} alt="engineering" className="eng-back"/>
        
        <div className="about-content-container">
            <div className="content-set-container">
                <img src={mission} alt="our mission" className="content-image" />
                <span className="content-text">Our Mission</span>
            </div>

            <div className="content-set-container">
                <img src={story} alt="our story" className="content-image" />
                <span className="content-text">Our Story</span>
            </div>

            <div className="content-set-container">
                <img src={troubleshoot} alt="troubleshooting" className="content-image" />
                <span className="content-text">Problems and Solutions</span>
            </div>

            <div className="content-set-container">
                <img src={request} alt="our mission" className="content-image" />
                <span className="content-text">Call for Action</span>
            </div>
        </div>

        <div className="content-detail-container">

            <div className="content-detail-set">           
            <span className="content-detail-heading">Our Mission</span>
               <span className="content-detail-text">
                "At CarveTech Engineering, we leverage our expertise
                 in electrical and solar power engineering, coupled with comprehensive
                 ICT tutoring, to revolutionize the way energy is harnessed and technology is 
                understood. Our mission is to drive sustainable energy solutions, empower
                future generations with digital literacy, and foster innovation at 
                the intersection of energy and technology, ultimately shaping a brighter
                and more connected world."
                </span>                
            </div>

            <div className="content-detail-set">           
               <span className="content-detail-text">
               "Our journey began as an apprentice at a local electrical outlet to a 
                well known and respected Technical Institute where the push into Electrical
                Installation became not just a skill leanrt, but an aspiration toward achieving 
                a goal.
                <br /> <br />
                With years of learning and training from some few key organizations, we attained key
                knowledge needed to kick start needed electrical standards, troubleshooting skills,
                installation and maintenance techniques, customer satisfaction.
                <br /> <br />
                Our journey of learning dived us into Artificial Intelligence and Robotics where we found
                a great need to adapt to the every growing need for programming skill with languages such aspiration
                C, C++ and C#. As time goes on, we grew more into the basics such as HTML & CSS, advanced even
                further into JavaScript & Python. The passion grew even stronger as we then adapted into the use of
                the SQL data management language.
                <br /> <br />
                During these time, we partnered with a solar company and added yet another skill-set getting us to a more
                achievable part of our journey of sustainable energy, Solar Power."
                </span> 
                <span className="content-detail-heading">Our Story</span>               
            </div>

            <div className="content-detail-set">           
            <span className="content-detail-heading">Problems and Solutions</span>
               <span className="content-detail-text">
               "When we move in the direction of rendering Electrical Services, 
                our key focus has always been individual clients from the onset.
                Our growth came from the lowest level of experience upgrading to rendering
                services to smaller companies like a "Water Bottling Company". 
                <br /> <br />
                Training individuals got more response at that point where programming
                languages came into the picture. We realized this helped with deeper
                understanding of how it plays in our design implemetation. The more we train,
                and perform practical operations widen the possibilities of correcting some 
                errors that should/can develop whilst in the field.
                <br /> <br />
                Carrying out installation in establisments such as a School brought about the 
                importance of carring out safety measures during installations as this is very 
                vital in such environment where potential unwanted movement and tampering can 
                come from the minors in the school environment."
                <br /> <br />
                "Because low standard in purchasing of materials and pattern of installation plays
                a great role in bringing the need for faults thereby making troubleshooting a vital
                need in various installation ranging from electrical, mechanical and solar setups,
                we have made it our core determination to put the best in necessary material and 
                strict installation policy to reduce the early possiblity of faults in any installation
                or setup alike."
                </span>                
            </div>

        </div>
            <p className="team-main-heading">-     Our Team     -</p>
        <div className="our-team-container">

            <div className="our-team-set">
                <img src={jacob} alt="teampic" className="team-img" />
                <span className="team-name">Edward Jacob</span>
                <span className="team-role">Electrical / Solar Engineer</span>
            </div>

            <div className="our-team-set">
                <img src={jacob} alt="teampic" className="team-img" />
                <span className="team-name">name</span>
                <span className="team-role">role</span>
            </div>

            <div className="our-team-set">
                <img src={jacob} alt="teampic" className="team-img" />
                <span className="team-name">name</span>
                <span className="team-role">role</span>
            </div>

        </div>
        
        </div>
    );
}

export default AboutPage;