const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

//creating instance of router
const router = express.Router()

//ADDING DIFFERENT REQUEST HANDLERS TO ROUTER

//GET all the workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)


//update a workout
router.patch('/:id', updateWorkout)

module.exports = router