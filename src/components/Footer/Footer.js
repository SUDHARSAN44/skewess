import React from 'react';
import './Footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
        <div className="footer-row row">

        <div className="brand-col col-sm-4">
            <a className="navbar-brand" href="#">
                <img src="https://i.ibb.co/JznYQ4w/new22.png" alt="brand"></img>
            </a>
            </div>

            <div className="services-col col-sm-4">
                <ul className="services">
                    <li className="head services-head">Services</li>
                    <li>Mobile App Development</li>
                    <li>Web development</li>
                    <li>UI/UX Designs</li>
                </ul>
            </div>

            <div className="platforms-col col-sm-4">
                <ul className="platformsx">
                    <li className="head">Platforms Supported</li>
                    <li>Android</li>
                    <li>IOS</li>
                    <li>Windows</li>
                </ul>
            </div>

        </div>
        <p>© 2022 Skewess Tech Pvt Ltd. All rights reserved.</p>
    </footer>
    )
    }


    export default Footer