import React from "react";
import Card from '../card/Card'
import './Products.css'

const Products = ()=>{
    return (
        <div className="card-group product-card-group"> 
        <Card src="https://i.ibb.co/QcdMh7T/sign-lock3.png" title="SIGN LOCK" content="Simple technique to protect your signature from getting misused."/>
        <Card src="https://i.ibb.co/104x9ZS/ske1.png" title="SKE" content="Method of identifying counterfeit products ."/>
        <Card src="https://i.ibb.co/YRVqzhj/mitok1.png" title="MiTok" content="Hassle-free Token system for hospitals, Spa and Saloon."/>
        </div>
    )
}

export default Products 
