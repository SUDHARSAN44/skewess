import React from "react";
import './Card.css'
import Tilt from 'react-vanilla-tilt'

const Card = (props)=>{
    return(
        <div class="card">
            <Tilt className="center">
            <img src={props.src} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
            </Tilt>
        </div>
    )
}

export default Card