const express = require('express');
const router = express.Router();
const { createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutController');




//routes

//GET all workouts
router.get('/', getAllWorkouts);


// GET a single workout

router.get('/:id', getSingleWorkout);

// POST a workout   

router.post('/',createWorkout);


// DELETE a workout

router.delete('/:id', deleteWorkout);

//update a workout 

router.patch('/:id', updateWorkout);









module.exports = router;