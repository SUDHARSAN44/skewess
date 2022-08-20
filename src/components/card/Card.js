import React from "react";
import './Card.css'
import Tilt from 'react-vanilla-tilt'

const Card = (props)=>{
    return(
        <Tilt id="card">
        <div class="card">
            <div className="card-image">
                <img src={props.src} class="card-img-top" alt="..."></img>
            </div>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
        </div>
        </Tilt>
    )
}

export default Card