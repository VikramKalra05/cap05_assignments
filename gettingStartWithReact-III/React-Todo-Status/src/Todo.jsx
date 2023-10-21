import React, {useState} from "react";

function Todo () {
    const [taskName, setTaskName] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        setTaskName(event.target.value)
    }

    const handleSubmit = () => {
        const newTodo = {
            title: taskName,
            status: false,
            id: Date.now() + Math.random(1)
        }
        const newTodoAfterAdding = [...todoList, newTodo];
        setTodoList(newTodoAfterAdding);
    }

    const handleUpdateTodo = (id) => {
        const updatedTodo = todoList.map((todo)=> {
            if(todo.id === id){
                console.log(!todo.status)
                return {...todo, status: !todo.status};
            }else{
                return todo;
            }
        })
        setTodoList(updatedTodo);
    }

    const handleDelete = (id) => {
        const updatedTodo = todoList.filter((todo) => {
            return todo.id !== id;
        })
        setTodoList(updatedTodo)
    }

    return (
        <>  
            <div id="navbar">
                <h1>Todo App</h1>
            </div>
            <div id="addTodo">
                <input type="text" placeholder="Add Todo" onChange={handleChange}/>  
                <br/>
                <button onClick={handleSubmit}>Add Todo</button>  
            </div>
            <div id="todoList">
                {todoList.map((todo) => (
                    <div  
                        className="todoItem"
                        key={todo.id}
                    >
                    <p>
                        {todo.title} - {todo.status ? "Completed" : "Not Completed"}
                    </p>
                    <button onClick={() => handleUpdateTodo(todo.id)}>Toggle Todo Status</button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todo;
