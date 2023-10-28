import {useState , useEffect} from "react";
import axios from "axios";

const getData = async (url)=>{
    try{
        let res = await axios.get(url)
        const totalCount = +res.headers.get("x-total-count")
        const totalPages = Math.ceil(totalCount / 10)
        const data = res.data
        return {
            data: data,
            totalPages: totalPages
        }
    }catch (error) {
        console.log(error);
    }
}

const Todos = (todos) => {
    const list = todos.data;

    return (
        <div id="list">
            {list.map((todo)=>(
                <div 
                    key={todo.id} 
                    id={todo.id} 
                    title={todo.title}
                    className="todo"
                >
                    <h3>Task {todo.id} - {todo.title}</h3>
                    <h4>{todo.completed ? "Completed": "Pending"}</h4>
                </div>
            ))}
        </div>
    )
}

function App(){
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1)  

    useEffect(() => {
        fetchAndUpdateData(page)
    }, [page]);

    const fetchAndUpdateData = async (page) => {
        setLoading(true);
        try {
            let output = await getData(
                `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
            )
            const { data, totalPages } = output
            setTotalPages(totalPages)
            setTodos(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div id="header">
                <h1>React Todo App</h1>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>PREVIOUS</button>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>NEXT</button>
                <p>Page no. {page}</p>
            </div>
            <Todos data={todos}/>
        </>
    )
}

export default App;