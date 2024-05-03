
import { useState } from "react";

export default function TodoesData() {
  // const [todosData, setTodosData] = useState(["html", "css"]);
  const [todosData, setTodosData] = useState([
    {
      title: "html",
      status: false,
    },
    {
      title: "css",
      status: false,
    },
    {
      title: "js",
      status: false,
    },
  ]);
  // const [firstSTatus, setfirstSTatus] = useState(false)
  // const [firstSTatus, setfirstSTatus] = useState()

  function addNewTodo(e) {
    e.preventDefault();
    console.log(e.target.title.value);

    /* 
    // todosData.push("new-element"); // cant change react state variable directly
      let temp = todosData // refernce variable
      temp.push("js")
    */

    let temp = [...todosData]; // spread opertor
    temp.push({
      status: false,
      title: e.target.title.value,
    });
    // console.log(temp);
    // setTodosData( ["html","css","js"])
    setTodosData(temp);
    e.target.title.value = "";
  }

  function deleteTodo(deleteableIndex) {
    console.log("delete ...", deleteableIndex);
    let temp = [...todosData];
    /* build your logic to delete respecive index from todosData array */

    // temp.splice(index,1)

    /* temp = temp.filter((el, idx) => {
      if (index == idx) {
        return false;
      }
      return true;
    }); */

    /*
      temp = temp.filter((el, idx) => {
        if (deleteableIndex != idx) {
          return true;
        }
      });
     */
    
    temp = temp.filter((el, idx) => deleteableIndex !== idx);
    setTodosData(temp);

  }
  function toggleStatus(){
    let temp[..to]
  }

  return (
    <div>
      <h2>Todos List</h2>
      <form onSubmit={addNewTodo}>
        <input required name="title" type="text" />
        <button>add</button>
      </form>
      <br />
      {JSON.stringify(todosData)}
      {/* <ul style="list-style:none;"> */}
      <ul style={{ listStyle: "none" }}>
        {todosData.map((el, index) => {
          return (
            <li key={index}>
              <input checked={el.status}
              onChange={(e)=>{
                toggleStatus(index)
              }} 
              type="checkbox" /> <span className="">{el.title}</span>
              <button
                type="button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


