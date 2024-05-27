const connectDB = require('./db_config/db_config');
const app = require('express')();
const port = 3000;
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

// for accepting post form data
const bodyParser  = require('express').json;
app.use(bodyParser());

app.use('/user', userRoutes);
app.use('/bookings', ticketRoutes);

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch(error => {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
});



