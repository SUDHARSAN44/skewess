import React from "react";
import Navbar from '../../components/NavBar/Navbar'
import './Index.css'
import Banner from '../../components/Banner/Banner'
import Products from "../../components/Products/Products";
import Services from "../../components/services/Service";
import ContactUs from "../../components/contactForm/Contact";
import Footer from "../../components/Footer/Footer";
const Index = () => {
    return (
        <>
            <Navbar />
            <Banner/>

            <div className="who-we-are container" id="aboutUs">
                <h2>WHO WE ARE</h2>
                <p>A group of young, enthusiastic, and bright team members who work together to quickly meet the needs of our clients.
                    We used to think beyond the limit and provide better suggestions to our clients to bring their products best in class.
                    Our team creates best-in-class web applications, mobile applications, Explainer animated video, video editing, UI & UX designing, logos, brochures, etc.
                    we never fail to put smiles on customers' faces at the time of product delivery.</p>
            </div>

            <div className="skewess">

                <h2>Let's know What is Skewess ?!</h2>
                <img src="https://i.ibb.co/JznYQ4w/new22.png" alt="logo"></img>
                <p>
                    Skewess number is a famous large number, commonly given as 
                    <span> &nbsp; 10^10^10^34</span>
                    ,
                    that was first derived in <span> 1933</span> by south african
                    mathematician Stanely Skewes in a proof involving prime numbers.
                </p>
            </div>

            <div className="what-we-offer" id="service">
                <h2>WHAT WE OFFER</h2>

                        <Services/>
                    </div>


            {/*Products Carousel :: start*/}
            

            <div className="our-products">
            <h2>OUR PRODUCTS</h2>

            {/*Products Carousel :: end*/}
                
            <Products/>

           

            
            </div>

            <ContactUs/>

           <Footer/>
        </>
    )
}

export default Index