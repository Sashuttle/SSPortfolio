import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; 
import App from './App'; 


ReactDOM.render(
    <React.StrictMode>{/*wrapping in <Router></Router> causes the page to not load but react.strictmode will need to be removed & replaced with router?*/}
        <App />
    </React.StrictMode>,
document.getElementById('root')
);

