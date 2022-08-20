import React from "react";
import './Service.css'


const ServiceCard = (props)=>{
    return (
        <div className="card service-card">
                <div className="card-img">
                    <img src={props.src} alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
        </div>
        
    )
}

const Services = ()=>{
    return(
    
    
    <div className="card-group services-group">
       
    <ServiceCard src="https://i.ibb.co/VWJrCDH/icons8-flutter-48.png"  title="App development" content="Our mobile app development services include: Business, needs, requirements , analysis and etc.... . By using Databases such as Firebase, Hasura ,etc..."/>
    <ServiceCard src="https://i.ibb.co/DCDtxpB/icons8-react-native-48.png" className="fa-brands fa-react" title="Web Development" content="We professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.."/>
    <ServiceCard src="https://i.ibb.co/56wjgm3/icons8-adobe-xd-48.png" title="UI UX Designs" content="Our UI designers aim to build keen brand awareness to help your company improve customer satisfaction, improve user interaction, boost your business grow"/>
    </div>
    )
}

export default Services;