import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-container text-start">
                <h5>University Information</h5>
                <div className="icons-container d-flex text-center ">
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon className="styleIcon rounded-circle" icon={faInstagramSquare} />
                  </div>
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon rounded-circle">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Abouts</li>

                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> Privacy</li>
                </ul>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
