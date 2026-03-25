require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const patientsRouter= require('./routes/patients');

const app = express();
app.use(express.json());
const db = require('./config/db');
app.use('/api/patients', patientsRouter);

 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

module.exports = app;