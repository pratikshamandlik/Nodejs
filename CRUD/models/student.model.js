const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let StudentSchema=new Schema({
    name: {type:String },
    stream :{type:String}
});

module.exports = mongoose.model('Student', StudentSchema);