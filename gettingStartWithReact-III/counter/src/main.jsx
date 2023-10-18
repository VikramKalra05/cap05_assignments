import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'  



function App(){
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count+1);

  return (
    <>
      <div>
        <button onClick={handleClick}>Update</button>
        <h1>Count is {count}</h1>
      </div>
    </>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
