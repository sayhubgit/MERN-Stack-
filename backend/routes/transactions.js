// backend/routes/transactions.js

const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const axios = require('axios');

// Initialize database route
router.get('/initialize', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;

        await Transaction.deleteMany({});
        await Transaction.insertMany(transactions);

        res.send({ message: 'Database initialized with seed data' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to initialize database' });
    }
});

// Other routes here

module.exports = router;
