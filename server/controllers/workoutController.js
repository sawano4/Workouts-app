const workout = require('../models/workoutModel');
const mongoose = require('mongoose');


// get all workouts
const getAllWorkouts = async (req, res) => {
    try{
        const workouts = await workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
  }catch(error)
  {
   res.status(400).json({msg: error.message});
  }
}





// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({msg:'no such workout'});
  }

   const workoutToGet = await workout.findById(id);

   if(!workoutToGet){
     return res.status(404).json({msg:'no such workout'});
   }
    res.status(200).json(workoutToGet);
}



// create new workout
const createWorkout = async (req, res) => {
    const { title , load , reps} = req.body;
    let emptyFields = [];
    if(!title) emptyFields.push('title');
    if(!load) emptyFields.push('load');
    if(!reps) emptyFields.push('reps');
    if(emptyFields.length > 0){
      return res.status(400).json({msg: `the following fields are required: ${emptyFields.join(', ')}`});
    }
    try{
        const newWorkout = await workout.create({title, load , reps});
        res.status(200).json(newWorkout);
  }catch(error)
  {
   res.status(400).json({msg: error.message});
  }
}





// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedWorkout = await workout.findByIdAndDelete(id);
        res.status(200).json(deletedWorkout);
  }catch(error)
  {
   res.status(400).json({msg: error.message});
  }
}







// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { title , load , reps} = req.body;
    try{
        const updatedWorkout = await workout.findByIdAndUpdate(id, {
          ...req.body
        }, {new: true});
        res.status(200).json(updatedWorkout);
        if(!updatedWorkout){
          return res.status(404).json({msg:'no such workout'});
        }
  }catch(error)
  {
   res.status(400).json({msg: error.message});
  }
}










module.exports ={
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}