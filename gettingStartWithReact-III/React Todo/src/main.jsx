import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

function TaskItem({title, index}){
  return (
    <div className='item'>
      <h2>Task{index+1} : {title}</h2>
    </div>
  )
}

function AddTodo ({addItem}){
  const [taskName, setTaskName] = React.useState("");

  const handleTask = (event) => setTaskName(event.target.value);
  
  const handleAddTask = () => {
    const newTask = {
      title: taskName
    }
    addItem(newTask);
  }

  return (
    <div className="addTodo">
        <input
        placeholder="Add Task"
        onChange={handleTask}
        value={taskName}
      />
      <button onClick={handleAddTask}>Add Todo</button>
    </div>
  )
}

function App(){
  const [taskList, setTaskList] = React.useState([]);

  const addItem = (newTask) => {
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <AddTodo addItem={addItem}/>
      <div id="list">
        <ul>
          {taskList.map((task, index) => (
            <TaskItem title={task.title} index={index}/>
          ))}
        </ul>
      </div>
    </>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
