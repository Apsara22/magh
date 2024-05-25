import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from "./App1";
import TodoCRUD from './TodoCRUD'
// import App1 from './SelfPratice/App1'
import "./Index.css"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App1/> */}
    <TodoCRUD/>
    </React.StrictMode>,
)
