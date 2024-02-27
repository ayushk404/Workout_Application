 //invoke config() method directly 
require('dotenv').config()
var cors = require('cors')

//express package inside node
const express = require('express')
const mongoose =require('mongoose')
const workoutRoutes = require('./routes/workout')

//create express app stored in app
const app=express()

//middleware
app.use(cors())

app.use(express.json()) 

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

/* to test API
//setup route handler to react to request
app.get('/',(req, res)=>{      //'/' fires local host when listening to request
    res.json({mssg: 'Welcome to the app'})
})
*/

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, ()=>{
        console.log("connected to db and listening on the port",process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



