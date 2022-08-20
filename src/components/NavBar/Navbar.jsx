import React,{useState,useEffect} from "react";
import './Navbar.css'



const Navbar = () => {  

    return (
        <nav className='navbar fixed-top text-white navbar-expand-lg color-white color-dark '>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://i.ibb.co/JznYQ4w/new22.png" alt="brand"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav">
                        <li className="nav-item">
                            <a className=" active show nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutUs" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar