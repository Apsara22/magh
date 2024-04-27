// import data1 from "./data/data1"

import data1 from "./data/data1";

// function Practice(){
//     return(
//         <>
//          <h1 className="heading">Online Products</h1>
//         {data1.map((el) =>{
//             <div>
//             return <li className="product" key={el.id} > 
//             <p className="title">{el.title}</p>
//             <img src={el.thumbnail}/>
//             <p>{el.rating}</p>
//             </li>
//             </div>
//         }) }
        
//         </>
//     )
        
// }
// export default Practice
    
function Practice(props){
    let data1 =props.data1
    return(
        <>
        <div className="productson">
            
        </div>
        </>
    )
}