const express = require('express')
const Book = require('../models/bookModels')

const bookRouter = express.Router();

//homepage
bookRouter.get('/', async(req, res) => {
    //goes into the schema and waits for the information to come from it
    const books = await Book.find();
    res.send(books);
})

//this gets books from a slug(identifier) and sends them if they exist
bookRouter.get('/slug/:slug', async(req, res) => {
    const book = await Book.findOne({ slug: req.params.slug });
    if(book){
        res.send(book);
    }else{
        res.status(404).send({message: 'Product Not Found'})
    }
});

bookRouter.get('/:id', async(req, res) => {
    const book = await Book.findById(req.params.id);
    if(book){
        res.send(book);
    } else{
        res.status(404).send({message: 'Product not found'})
    }
})

module.exports = bookRouter;