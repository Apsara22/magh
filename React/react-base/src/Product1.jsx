// import SingleProduct from "./SingleProduct";
import products from "./data/products";

function Product1(){
    
    
    return(
        <>
        
        <h1 className="heading">Product</h1>
        {products.map((el, index) =>{
            <div>
            return <li className="product" key={index} > 
            <p className="title">{el.title}</p>
            <p>{el.price}</p>

            <img src={el.thumbnail}/>
            </li>
            </div>
        }) }
        </>
    )
}
export default Product1