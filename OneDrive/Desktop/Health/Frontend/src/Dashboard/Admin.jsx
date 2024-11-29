import React from 'react'
import '../assets/Admin.css'

const Admin = () => {
return (
     <div className="dashboard-container">
      
      
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="actions">
            <select>
              <option>January 2024</option>
              <option>February 2024</option>
              <option>March 2024</option>
            </select>
            <button className="btn-primary">+ New Patients</button>
          </div>
        </header>

        
        <section className="overview">
          <div className="overview-card">
            <p>Patient Enrolled</p>
            <h2>550</h2>
            <span>↑ 10% Since last month</span>
          </div>
          <div className="overview-card">
            <p>Non-Complex</p>
            <h2>500</h2>
            <span>↑ 6% Since last month</span>
          </div>
          <div className="overview-card">
            <p>Complex</p>
            <h2>50</h2>
            <span>↑ 10% Since last month</span>
          </div>
          <div className="overview-card">
            <p>Compliance</p>
            <h2>75%</h2>
            <span>↓ 0% Since last month</span>
          </div>
          <div className="overview-card">
            <p>Improvement</p>
            <h2>84%</h2>
            <span>↑ 26% Since last month</span>
          </div>
        </section>

        
        <section className="program-billing">
          <div className="program">
            <h3>Program</h3>
            <div className="program-card">New Enrollments: 200</div>
            <div className="program-card">Initial Interview & Care Plan: 180</div>
            <div className="program-card">Devices Supplied: 150</div>
          </div>
          <div className="billing">
            <h3>Billing</h3>
            <h2>Total Revenue: Rs.1,30,78,405.36</h2>
            <p>Avg Reimbursement:</p>
            <ul>
              <li>$64.02</li>
              <li>$48.45</li>
              <li>$86.17</li>
            </ul>
          </div>
        </section>

        
        <section className="tasks">
          <h3>Today’s Tasks</h3>
          <ul>
            <li>Reach out to patient</li>
            <li>Review Check-Ins</li>
            <li>Assign new CGM devices</li>
          </ul>
        </section>
      </main>
    </div>
)
}

export default Admin
