const Task = require('../models/models')

exports.viewAlltasks =  async (req, res) => {
  {
      const tasks = await Task.find(); // Retrieve all tasks from the database
      res.status(200).json(tasks); // Send tasks as JSON response with status 200
  } 
}

exports.createTask = async (req, res) => {
  try {
    // Extract data from the request body
  var{Priority, Description , Deadline} = req.body;
  
    // Create a new Task document
var newTask = new Task({
       Priority,
       Description,
       Deadline 
     });
    
    // Save the new idea to the database
    const savedTask = await newTask.save();

    // Send a success response with the saved Task
    res.status(201).json(savedTask);
  } catch (error) {
    // Handle any errors and send an error response
    console.error('Error creating adding Task:', error);
    res.status(500).json({ error: 'Failed to create new Task' });
  }
};

exports.taskById = async (req, res) => {
    try {
        const obj_Priority = req.params.Priority; // Retrieve the Priority from request parameters

        // Find the task by Priority
        const task = await Task.findOne({ Priority: obj_Priority });

        if (!task) {
            // If task with the specified Priority is not found, return a 404 Not Found response
            return res.status(404).json({ message: `Task with Priority '${obj_Priority}' not found` });
        }

       
        res.status(200).json(task); // Return the task in the response
    } catch (error) {
        // Handle any errors and send an error response
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateTask = async (req,res) => {
      const obj_Priority = req.params.Priority;
      //Find the Task by Priority
      const task = await Task.findOne({Priority: obj_Priority})
     try{
      if(!task){
          // If task with the specified Priority is not found, return a 404 Not Found response
          return res.status(404).json({message:`Task with Priority '${obj_Priority}' not found`})
      }
     //Update the Task
     if(req.body.Description){
     task.Description = req.body.Description
     }

     if(req.body.Deadline){
      task.Deadline = req.body.Deadline
      }
      await task.save();
      res.status(200).json(task)
     }catch(error){
        console.log(`cannot update due to : '${error}'`)
     }
        
}

exports.deleteTask = async (req,res) => {

  const obj_Priority = req.params.Priority;
  const task = await Task.findOne({Priority: obj_Priority})

  try{  if(!task){
     console.log(`Task not found`)
  } 

  delete task
  res.status(200).json(`deleted successfully`)
}catch(error){
  console.log(`can't delete task due to : ${error}`)
}
}


//  exports.updateTask = async (req, res) => {
//   const taskId = req.params.id;
//   const { Priority, Description, Deadline } = req.body;

//   try {
//       const updatedTask = await Task.findByIdAndUpdate(
//           taskId,
//           { Priority, Description, Deadline },
//           { new: true } // To return the updated document
//       );

//       if (!updatedTask) {
//           return res.status(404).json({ message: 'Task not found' });
//       }

//       res.status(200).json(updatedTask);
//   } catch (error) {
//       res.status(500).json({ message: 'Error updating task', error: error.message });
//   }
// };

// exports.deleteIdea = (req, res)=>{

//   //Fetch the idea and see if it's present
//   idea_add = req.params.add

//   if(ideas[idea_i]){
//       delete ideas[idea_id]
//       res.status(200).send({
//           message : "Yay, you idea has been successfully deleted"
//       })
//   }else{
//      return res.status(404).send({
//       message : "Idea id you wanted to delete is already not present boss !"
//      })
//   }

 
// }