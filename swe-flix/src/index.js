import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { 
    id: "12dfdb1d-dc4d-4eaa-a7a8-229c23941f91", 
    title: "All about JAVA!", 
    description: ` An introduction to the Java programming language. An introduction to
    the Java programming language. An introduction to the Java
    programming language. An introduction to the Java programming
    language.`,
    completed: false,
    favourite: false
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App videos={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
