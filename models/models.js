let mongoose = require('mongoose')

let task_Schema = new mongoose.Schema({
    Priority: {
        type: String,
        required: true
      },
      Description: {
        type: String,                                          
        required: true
      },
      Deadline: {
        type: String,
        required: true
      }
},{timestamps:true})

const Task = mongoose.model('Task',task_Schema);

module.exports = Task;
