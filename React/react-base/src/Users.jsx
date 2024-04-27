import React from "react";

 function Users(){

    let users=["ram","hari","sita","gita"];

    let mappedUsers=users.map((el)=>{
        return <li>{el}</li>
    })
    return(
        <>
        let todayDate=
        <h3 >Users</h3>
        {/* <ul>{mappedUsers}</ul> */}
        <ul>
            {users.map((el, index)=>{
                return <li key={index} > {el}</li>
                
            })}
        </ul>
        </>

    );
 }
 export default Users