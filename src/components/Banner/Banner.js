import React from "react";
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
        <div className="logo">
            <img src="https://i.ibb.co/mv8xJ8F/new22-removebg-preview-removebg-preview.png" id="rotate-logo"></img>
        </div>
        <div className="patterns">
            <svg width="100%" height="100%">
                <text x="50%" y="60%" text-anchor="middle"  >
                    Skewess Tech    
                </text>
            </svg>
        </div>
        <ul className="tag-line">
            <li>Time to go beyond the infinity</li>
            <li>we create world best class application designs.
</li>
        </ul>
        </div>
    )
}

export default Banner