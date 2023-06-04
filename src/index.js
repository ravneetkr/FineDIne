import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const fname= document.getElementById('fname')
// const email= document.getElementById('email')
// const date= document.getElementById('date')
// const time= document.getElementById('time')
// const message= document.getElementById('message')

// const submit = document.getElementsByClassName('form-contact')[0]

// submit.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   console.log("clicked");
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
