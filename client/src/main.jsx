import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { SchemaMarkup } from './pages/SchemaMarkup';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <SchemaMarkup />
    <Router>
      <App /> 
    </Router>
  </React.StrictMode>,
)
