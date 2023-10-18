import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const skills = ["React", "NodeJS", "JavaScript", "SQL", "Python", "React Hooks", "React Native", "MongoDB"];
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [title, setTitle] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (skill) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill) ? prevSkills.filter((s) => s != skill) : [...prevSkills, skill]
    );
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Title:', title);
    console.log('Avatar URL:', avatarUrl);
    console.log('Selected Skills:', selectedSkills);
    setSubmitted(true); 
  };

  return (
    <>
      <div className='main'>
        <UserProfile />
        {submitted && (
          <div className='profile'>
            <h2 id='name'>{name}</h2>
            <h2 id='title'>{title}</h2>
            <img src={avatarUrl} alt="Avatar" />
            <h4>Skills:</h4>
            <div className='skills'>
              {selectedSkills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );

  function UserProfile() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Enter Your Name: </h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <h2>Enter Your Title: </h2>
          <input
            type="text"
            placeholder="Enter Your Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <h2>Enter Profile Photo URL: </h2>
          <input
            type="text"
            placeholder="Avatar URL"
            value={avatarUrl}
            onChange={(event) => setAvatarUrl(event.target.value)}
          />
          <h2>Choose your Skills: </h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`skill-${index}`}
                checked={selectedSkills.includes(skill)}
                onChange={() => handleCheckboxChange(skill)}
              />
              <label htmlFor={`skill-${index}`}>{skill}</label><br />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
