require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req,res,next)=> {
   console.log(req.path, req.method)
   next();
});

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);





//connect to db

mongoose.connect(process.env.MONG_URL)
.then(
    //listen for port
app.listen(process.env.PORT, () => {
    console.log('Connected to MongoDb'),
    console.log(`Server is running on port ${process.env.PORT}`);

  })
)
.catch((err) => {
    console.error(err)});

    














