const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect( 'mongodb+srv://luckybhagel2004:123%40Luv@tasks.oieotql.mongodb.net/Tasks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 100000, // 100 seconds timeout
    socketTimeoutMS: 100000 // 100 seconds socket timeout
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Disable Mongoose buffering globally
mongoose.set('bufferCommands', false); // Disable buffering
mongoose.set('bufferTimeoutMS', 30000); // 30 seconds timeout for buffer

app.use(express.json()); // Parse JSON bodies
// app.use(bodyParser.urlencoded({ extended: true })); // Example for URL-encoded bodies

require('./router/userRouter')(app); // Include your router setup

// Start the server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
