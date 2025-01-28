import React from "react";
import './Gallery.css';
import backimg from './EngPic1.jpg';
import electpic1 from './Work/2021-10-28 (1).jpg';
import electpic2 from './Work/2021-10-28 (4).jpg';
import electpic3 from './Work/2021-10-28 (5).jpg';
import electpic4 from './Work/elect11.jpg';
import electpic5 from './Work/elect12.jpg';
import electpic6 from './Work/2021-10-28 (2).jpg';
import solarpic1 from './Work/solar3.jpg';
import solarpic2 from './Work/IMG_20220919_163159.jpg';
import solarpic3 from './Work/IMG_20220901_100157.jpg';
import solarpic4 from './Work/One.jpg';
import solarpic5 from './Work/Six.jpg';
import solarpic6 from './Work/Three.jpg';

const GalleryPage = () => {
    return(
        <div className="gallery-container">
         
            <img src={backimg} alt="eng-wallpaper" className="gallery-background" />
            <span className="gallery-text">Our Gallery</span>
        
        <span className="pic-set-title">Electrical Works</span>
        <div className="gallery-picture-container">
            <div className="gallery-picture-set">
                <img src={electpic1} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic2} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic3} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic4} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic5} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic6} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>
        </div>

        <span className="pic-set-title">Solar Installation Works</span>
        <div className="gallery-picture-container">
            <div className="gallery-picture-set">
                <img src={solarpic1} alt="solarpic" className="workpic" />
                <span className="pic-caption">Panel Maintainance  <br />
                Ikeja, Lagos State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic2} alt="solarpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic3} alt="solarpic" className="workpic" />
                <span className="pic-caption">8kvA Inverter Setup <br />
                Ibadan, Osun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic4} alt="solarpic" className="workpic" />
                <span className="pic-caption">5KvA Times Three Load Separator <br />
                Ajah, Lagos State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic5} alt="solarpic" className="workpic" />
                <span className="pic-caption">Panel Upgrade Installation <br />
                Ajah, Lagos State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic6} alt="solarpic" className="workpic" />
                <span className="pic-caption">Panel Upgrade Installation <br />
                Ajah, Lagos State</span>
            </div>
        </div>



        </div>
    );
}

export default GalleryPage;