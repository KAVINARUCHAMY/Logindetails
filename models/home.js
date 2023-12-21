const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    mobileno:{
        type:String,
        required:true,
    },
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;