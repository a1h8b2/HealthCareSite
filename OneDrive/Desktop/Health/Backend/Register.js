//import and intialization
const EventEmitter = require('events');
const cors = require('cors');
const express = require('express');
const bcrypt = require('bcrypt');
const http = require('http');

//instances create object for the event
const app = express();
const eventEmitter = new EventEmitter();

//middleware
app.use(cors());
app.use(express.json());

//data storage
const users = [];

//event listeners
eventEmitter.on('userRegistered', (username) =>{     //registering the new user
    console.log(`user:${username}`);
});

eventEmitter.on('loggedIn', (username) => {      //loggedin successfully
    console.log(`user:${username}`);
})


//Register Router

app.post('/register', async(req, res) => {     //used for submitting forms or sending data to a server from clients

const {username, password} = req.body;

//checking existing user
const existingUser = users.find((user) => user.username === username);
if(existingUser) {
    return res.status(400).json({message: 'Username already exists'});
}

//hashing the password
const hashedpassword = await bcrypt.hash(password, 10);   //Using await pauses the execution of the surrounding async function until the hashing operation is complete.

//storing the user
users.push ({username, password: hashedpassword});

eventEmitter.emit('userRegistered', username);
//sending a response
res.json({message: `${username} registered successfully`});

});




//login

app.post('/login' , async(req, res) => {
    const {username,password} = req.body;
 
 
 const user = users.find((user) => user.username === username);
 if(!user){
     return res.status(400).json({message:'Invalid username or password'});
 
 }
 
const passwordValid = await bcrypt.compare(password,user.password);
if(!passwordValid) {
    return res.status(400).json({message:'Invalid  password'});
}
 

 
 eventEmitter.emit('userLoggedIn', username);
 
 res.json({message:`Welcome ${username} `});
 
 });



app.listen(6001,() => console.log('server is running'));






// const EventEmitter = require('events');
// const express = require('express');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const http = require('http');

// const app = express();
// const eventEmitter = new EventEmitter();

// app.use(cors());
// app.use(express.json());

// const users = [];

// eventEmitter.on('userRegistered' , (username) => {
//     console.log(`user:${username}`);
// })

// eventEmitter.on('userLoggedIn' , (username) => {
//     console.log(`user:${username}`);
// })
// // reg
// app.post('/register' , async(req, res) => {
//    const {username,password} = req.body;


// const existingUser = users.find((user) => user.username === username);
// if(existingUser){
//     return res.status(400).json({message:'username already exists'});

// }

// const hashedPassword = await bcrypt.hash(password, 10);

// users.push({username,password:hashedPassword});

// eventEmitter.emit('userRegistered', username);

// res.json({message:`${username}registered successfully`})

// });

// // login

// app.post('/login' , async(req, res) => {
//     const {username,password} = req.body;
 
 
//  const user = users.find((user) => user.username === username);
//  if(!user){
//      return res.status(400),json({message:'Invalid username or password'});
 
//  }
 
// const passwordValid = await bcrypt.compare(password,user.password);
// if(!passwordValid) {
//     return res.status(400),json({message:'Invalid  password'});
// }
 

 
//  eventEmitter.emit('userLoggedIn', username);
 
//  res.json({message:`Welcome ${username} `});
 
//  });

//  app.listen(6001,() => {
//     console.log('server is running');
// });


