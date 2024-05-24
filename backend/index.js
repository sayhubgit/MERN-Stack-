// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const transactionsRoutes = require('./routes/transactions');
const cors = require('cors'); // For allowing cross-origin requests
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Connect to MongoDB
    const dbURI = process.env.'mongodb+srv://thecoderyabham:Shubham@123@cluster0.kcld7xc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api', transactionsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
