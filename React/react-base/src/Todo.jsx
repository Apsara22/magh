let todos =[
    {
        title: "html", 
        status: "completed",
        des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
    },
    {
        title: "CSS", 
        status: "completed",
        des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
    },
    {
        title: "JAVA SCRICT", 
        status: "completed",
        des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." 

    }
];


export default function Todo(){
    return(
        <>
        <h2>TOdos</h2>
        <div id="todos" className="todos">
           { 
           todos.map((el, index)=> {
            return(
                <SingleTodo
                key={index}
                title={el.title}
                status={el.status}
                description={el.des}
                />

            );
           })}
        </div>
        </>

    )
}