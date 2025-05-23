import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
        required:true
    },
},{timestamps:true});

/*timestamps

بيضيف حقين هما 
createdAt
updatedAt*/

export const Book = mongoose.model("Book" , bookSchema)