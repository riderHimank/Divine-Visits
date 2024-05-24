
const connectDB = require('./db_config/db_config');
// const mongoose = require("mongoose");
// const dotenv = require('dotenv');
const app = require('express')();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

// for accepting post form data
const bodyParser  = require('express').json;
app.use(bodyParser());

// app.use(express.json());

// dotenv.config();
// const port = process.env.PORT || 5000;

// connectDB();

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    app.use('/user', userRoutes);
})
.catch(error => {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
});



