import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:String,
    name:String,
    price:Number,
    category:String,
    images:String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book; 