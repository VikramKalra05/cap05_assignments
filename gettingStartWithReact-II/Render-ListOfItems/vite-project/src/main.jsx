import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Using JSX
const App = () => {
  const Skills = ({items}) => {
    return (<>
    <div className='cont'>
      {items.map((ele, index) => (
      <p className='skill' key={index}>{index+1}. {ele}</p>
      ))}
    </div>
    </>
  )}

  return (
    <>
      <div>
        <h1>React App showcasing skills by Components & Mapping</h1>
        <h1>My set of skills are below</h1>
        <Skills items={["Coding", "Cooking", "Sports", "Public Speaking"]}/>
      </div>
    </>
  )
}


//Using React.CreateElement
//Uncomment below part for this

// const App = () => {
//   const Skills = ({ items }) => {
//     const skillElement = items.map((ele, index) => {
//       return React.createElement('p', { className: 'skill', key: index }, `${index + 1}. ${ele}`)
//     })
//     return React.createElement('div', { className: 'cont' }, skillElement);
//   };
//   return (
//     React.createElement('div', 0,
//     React.createElement('h1', 0, 'React App showcasing skills by Components & Mapping'),
//     React.createElement('h1', 0, 'My set of skills are below'),
//     React.createElement(Skills, { items: ["Coding", "Cooking", "Sports", "Public Speaking"] })
//   ))
// }
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)