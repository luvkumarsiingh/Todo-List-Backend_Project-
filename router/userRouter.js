const express = require('express')
const controllers = require('../controllers/userControllers')
const router = express.Router();

module.exports = (app) => {
app.get('/Todo_List/api/v1/tasks',controllers.viewAlltasks) // route for getting allTasks

app.post('/Todo_List/api/v1/tasks',controllers.createTask)// rotue for creating new Tasks

app.get('/Todo_List/api/v1/tasks/:Priority',controllers.taskById) // route for getting Tasks By Priority

app.put('/Todo_List/api/v1/tasks/:Priority',controllers.updateTask) // route for updating Task by Priority

app.delete('/Todo_List/api/v1/tasks/:Priority',controllers.deleteTask) // route for deleting Task by Priority
}
