//creation of server routes
// const express = require('express');
// //the cors package will help your server handle requests from other domains
// const cors = require('cors');

// const app = express();
// app.use(cors());


//  const Program = {
//     labels: ['New Enrollments', 'Initial Interview & Care Plan', 'Devices Supplied'],
//             datasets: [
//                 {
//                     label: 'Program Billing',
//                     data: [200, 180, 150], 
//                     backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
//                     borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
//                     borderWidth: 1,
//                 },
//             ],
// }

// const Billings = {
//     labels: ['64.02', '48.45', '86.17'], 
//             datasets: [
//                 {
//                     label: 'Average Reimbursement',
//                     data: [64.02, 48.45, 86.17],
//                     backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
//                     borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)'],
//                     borderWidth: 1,
//                 },
//             ],
// };

// app.get('/Program', (req, res) => {
//     res.json(Program);
// })

// app.get('/Billings', (req, res) => {
//     res.json(Billings);
// })




// const PORT = 3001;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`) );




const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const Programs = [
    { id: 1, description: 'New Enrollments', value: 200},
    { id: 2, description: 'Initial Interview & Care Plan', value: 180 },
    { id: 3, description: 'Devices Supplied', value: 90 },
];
const Billings = [
    { id: 1, description: 'Average Reimbursement 1', value: 64.02 },
    { id: 2, description: 'Average Reimbursement 2', value: 48.45 },
    { id: 3, description: 'Average Reimbursement 3', value: 86.17 },
];

app.get('/Billings', (req, res) => {
    res.json(Billings);
});

app.get('/Programs', (req, res) => {
    res.json(Programs);
});


const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));