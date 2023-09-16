const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    author: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
    image: { type: String, required: true },
    price: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    listType: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Creating the schema book, naming it book and getting it from the bookSchema variable.

const Books = mongoose.model("Book", bookSchema);
