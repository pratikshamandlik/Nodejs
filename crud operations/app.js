const express=require('express');
const bodyParser =require ('body-parser');

const student = require('./routes/student.route');
const app=express();
const mongoose=require('mongoose');

let db_url='mongodb+srv://test:test@crud.arlvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false} ));
app.use('/student',student);
let port =8888;

app.listen(port,()=>{
    console.log('server is up and running on port ' + port)
});