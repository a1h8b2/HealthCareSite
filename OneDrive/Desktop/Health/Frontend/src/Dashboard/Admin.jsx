import React, { useState, useEffect }  from 'react'
import '../assets/Admin.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';



// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale,PointElement, LineElement, Title, Tooltip, Legend);



const Admin = () => {
  const [ProgramData, setProgramData] = useState(null);
  const [BillingData, setBillingData] = useState(null);

  useEffect (() => {
    fetch('http://localhost:3001/Programs')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const labels = data.map((program) => program.description);
      const values = data.map((program) => program.value);

      setProgramData({
        labels,
            datasets: [
                {
                    label: 'Program Billing',
                    data: values, 
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1,
                },
            ],
      })
    })
    
 
.catch((error) => console.error('Error fetching data:', error));

// Fetch billing data
fetch('http://localhost:3001/Billings')
.then((response) => {
  if(!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then((data) => {
                const labels = data.map((billing) => billing.description);
                const values = data.map((billing) => billing.value);

                setBillingData({
                    labels,
                    datasets: [
                        {
                            label: 'Billing Data',
                            data: values,
                            backgroundColor: 'rgba(255, 159, 64, 0.6)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 2,
                            tension: 0.4,
                        },
                    ],
                });
})
 .catch((error) => console.error('Error fetching billing data:', error));
  }, []);



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
          <h3>Program Billing Overview</h3>
                    {ProgramData ? (
                        <Line
                            data={ProgramData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { display: true, position: 'top' },
                                    title: { display: true, text: 'Program Billing Data' },
                                },
                                scales: { y: { beginAtZero: true } },
                            }}
                        />
                    ) : (
                        <p>Loading Program Billing Chart...</p>
                    )}
                  </section>

           <section className="billing">
                    <h3>Billing Overview</h3>
                    {BillingData ? (
                        <Line
                            data={BillingData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { display: true, position: 'top' },
                                    title: { display: true, text: 'Billing Data' },
                                },
                                scales: { y: { beginAtZero: true } },
                            }}
                        />
                    ) : (
                        <p>Loading Billing Chart...</p>
                    )}
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



