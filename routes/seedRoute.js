const express = require('express');
const Book = require('../models/bookModels')
const data = require('../data.js')

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {
    await Book.remove({});
    const createdBooks = await Book.insertMany(data.products);
    res.send({createdBooks})
})

module.exports = seedRouter;