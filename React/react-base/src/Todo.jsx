// let todos =[
//     {
//         title: "html", 
//         status: "completed",
//         des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
//     },
//     {
//         title: "CSS", 
//         status: "completed",
//         des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
//     },
//     {
//         title: "JAVA SCRICT", 
//         status: "completed",
//         des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 

//     }
// ];


// export default function Todo(){
//     return(
//         <>
//         <h2>TOdos</h2>
//         <div id="todos" className="todos">
//            { 
//            todos.map((el, index)=> {
//             return(
//                 <SingleTodo
//                 key={index}
//                 title={el.title}
//                 status={el.status}
//                 description={el.des}
//                 />

//             );
//            })}
//         </div>
//         </>

//     )
// }

// let todosData=["html","css","java"]

// let mapTodos=todosData.map((element)=>{
//     return<li>{element}</li>
// })
import React,{useState} from "react";

export default function Todo(){

    // let todosData=["html","css",]
    const[todosData,setTodosData]= useState([
        "html","css",]);
        

    function addNewTodo(e){
        e.preventDefault()
        console.log(e.target.title.value);

        let temp =[...todosData]// spread operator
        temp.push(e.target.title.value);
        setTodosData(temp)
        console.log(temp)

        // e.target.title.value=""
        
    }
    function deleteTodo(index){
        console.log("delete..",index)

    }

    return(
        <div>
            <h2>Todos list</h2>
            <form action="" onSubmit={addNewTodo}>
            <input required type="text" name="title" />
            <button>Add</button>
            </form>
            {JSON.stringify(todosData)}
            <ul>
                {todosData.map((el,index)=>{
                    return <li key={index} >
                        <input type="checkbox" /> <span>{el}</span>
                        &nbsp;&nbsp;<button onClick={()=>{deleteTodo()}}>delete</button>
                        </li>;
                })}
            </ul>
        </div>
    )
}

//create delete list