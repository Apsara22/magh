import React from "react";
import { useState, useEffect} from 'react';

import axios from "axios";

export default function ProductApi(){
    const[isloading, setloading]= useState(false)
const [products, setproducts] = useState([])
function fetchApiData(){

    setloading(true);
    axios.get('https://dummyjson.com/products/')
    .then((res) =>{
        //  console.log(res.data.products)

        setproducts(res.data.products);

        
    })
    
}
useEffect(()=>{
    fetchApiData()
    setloading(false);

},[])

return (
    <>
    {/* <button onClick={fetchApiData}>Featch data</button> */}
    {isloading && <p>...is loading</p>}


    <ul>
        {products.map((el)=>{
            return <li>{el.title}</li>
        })}
        
    </ul>


    </>
)
}