import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : String, 
    username : String,
    email : String,
    phone : String
})

const user = mongoose.model('User', userSchema)

export default user;
