const express= require('express');

const router=express.Router();

const userdetails=require('../models/userdetails');

router.get('/',(req,res)=>{

userdetails.find({ })
    .then((data) => {
        console.log('Data:',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ',error);
    });
});

router.post('/register',(req,res) => {

    userdetails.find({email:req.body.email})
    .exec()
    .then(user_num => {
        if(user_num.length>0)
        {
            return res.status(500).json({
                message: 'User already exists'
            });
        }
        else
        {
            const data= req.body;

            const newUser=new userdetails(data);

                newUser.save((error) => {
                if(error) {
                    res.status().json({ msg: 'Sorry,internal server error'});
                } 
                else 
                {
                    res.json({
                        msg: 'Your data has been saved !!!!!'
                    });
                }
                });
        }
    });
    
});


module.exports=router;