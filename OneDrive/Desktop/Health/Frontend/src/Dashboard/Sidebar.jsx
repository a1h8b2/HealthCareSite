import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/sidebar.css';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">DIE <span>SOON</span></div>
      <ul className="menu">
        <li>
          <NavLink to="/Admin" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            Dashboard
            Admin</NavLink>
        </li>
        <li>
          <NavLink to="/patients" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            Patients
          </NavLink>
        </li>
        <li>
          <NavLink to="/billing" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            Billing & Claims
          </NavLink>
        </li>
        <li>
            <NavLink to="/Analytics" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            Analytics
          </NavLink></li>

        <li>
            <NavLink to="/schedular" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            Schedular
          </NavLink></li>


        <li >
            <NavLink to="/task" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            Task
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
