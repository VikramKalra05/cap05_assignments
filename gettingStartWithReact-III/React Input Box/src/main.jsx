import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

function App(){
  const [text, setText] = React.useState("");

  const handleChange = (e) => setText(e.target.value);

  const clearText = () => setText("");

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} placeholder='Add Text' value={text}/>
        <button onClick={clearText}>CLEAR</button>
        <h2>Text : {text}</h2>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
