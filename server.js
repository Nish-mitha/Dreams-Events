const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path');

const app=express();
const PORT=process.env.PORT || 8080;

const routes=require('./routes/user');

mongoose.connect('mongodb://localhost/dreams_events',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected', () =>{
    console.log('Mongoose connected');
});

//data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// HTTP request logger
app.use(morgan('tiny'));

app.use('/user',routes);

app.listen(PORT,console.log(`Server is starting at ${PORT}`));