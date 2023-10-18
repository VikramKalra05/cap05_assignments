import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

function App(){
  const HandleClick = () => {
    alert("You clicked Masai!")
  }

  return (
    <>
      <div className='btn'>
        <button onClick={HandleClick} name='Masai'>Masai</button>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
