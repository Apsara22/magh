import React from "react";
import Product1 from "./Product1";
export default function SingleProduct(props){
    let el = props.products;
    return(
        <>
        
        <h1 className="heading">Product</h1>
        
            return <li className="product" key={el.id} > 
            <p className="title">{el.title}</p>
            <img src={el.thumbnail}/>
            <p>{el.rating}</p>
            <p>{el.map}</p>
            </li>
            
        
    </>
    )
}