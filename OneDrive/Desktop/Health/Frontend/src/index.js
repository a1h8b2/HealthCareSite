import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Dashboard/Admin';
import Billing from './Dashboard/billing';
import Patients from './Dashboard/patients';
import Analytics from './Dashboard/Analytics';
import Schedular from './Dashboard/schedular';
import Task from './Dashboard/task';
import Sidebar from './Dashboard/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <Router>

    <div className="contentContainer">
    <div className="app-container">
        <Sidebar />
    </div>
     <div className="main-content">
            <Routes>
                <Route path="/" element={<App />} />
               <Route path="/Admin" element={<Admin />} />
               <Route path="/patients" element={<Patients />} />
               <Route path="/billing" element={<Billing />} />
               <Route path="/Analytics" element={<Analytics />} />
               <Route path="/schedular" element={<Schedular />} />
               <Route path="/task" element={<Task />} />


            </Routes>
        </div>
    </div>

        </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
