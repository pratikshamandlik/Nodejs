const mongoose = require('mongoose');
const { isEmail } = require('validator');

mongoose.model("Passenger", {
    name: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true
   
    },
    flightNo: {
        type: String,
        required:true
    }
   
});