const mongoose= require('mongoose');

// Schema

const Schema=mongoose.Schema;
const userdetailsSchema=new Schema ({
    username: String,
    address: String,
    email: String,
    phone: Number,
    password: String
});

//Model
const userdetails=mongoose.model('user_details',userdetailsSchema);

module.exports= userdetails;