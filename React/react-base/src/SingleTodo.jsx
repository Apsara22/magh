function SingleTodo(props){
    console.log("props", props);
    return(
        <div className="todo">
            <h3 className="capitalize"></h3>
            <p>{props.des}</p>
        </div>
    );
}
export default SingleTodo