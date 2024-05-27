const User = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const user_create_post = (req, res) => 
{
    let {firstname,lastname,email,password,address,pincode,dateOfBirth,} = req.body;
    firstname = firstname.trim();
    lastname = lastname.trim();
    email = email.trim();
    password = password.trim();
    address = address.trim();
    dateOfBirth = dateOfBirth.trim();

    // pincode checking required
    
    if(firstname == "" || lastname == "" ||email =="" ||password ==""||dateOfBirth =="")
    {
        res.json({
            status: "Failed",
            message: "Empty input fields!"
        });   
    }else if(!/^[a-zA-Z ]*$/.test(firstname)){  // name verify
        res.json({
            status: "FAILED",
            message: "Invalid first name entered"
        });
    }else if(!/^[a-zA-Z ]*$/.test(lastname)){  // name verify
        res.json({
            status: "FAILED",
            message: "Invalid last name entered"
        });
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        });
    }
    else if(isNaN(new Date(dateOfBirth).getTime())){
        res.json({
            status: "FAILED",
            message: "Invald date of birth entered"
        });
    }
    else if(password.length<8){
        res.json({
            status: "FAILED",
            message: "Password is too short"
        });
    } // Pincode validation
    // else if(isNaN(pincode))
    // {
    //     res.json({
    //         status: "FAILED",
    //         message: "Pincode is not a number"
    //     });
    // }
    else{
        // already register
        User.find({email}).then(result =>{
            if(result.length)
            {
                // user already existing
                res.json({
                    status: "FAILED",
                    message: "User with given email already existing"
                });
            }else{
                // create new user
                const saltRound = 10;
                bcrypt.hash(password,saltRound).then(hashedPassword =>{
                    const newUser = new User({
                        firstname,
                        lastname,
                        email,
                        password: hashedPassword,
                        address,
                        pincode,
                        dateOfBirth
                    });
                    // saving new user
                    newUser.save().then(result =>{
                        res.json({
                            status: "SUCCESS!",
                            message: "Signup successful",
                            data: result
                        })
                    })
                    .catch(err =>{
                        console.log(err);
                        res.json({
                            status : "FA",
                            message : " Error occuring while saving user"
                        })
                    });
                })
                .catch(err =>{
                    console.log(err);
                    res.json({
                        status : "FA",
                        message : " Error occuring while hashing for password"
                    });
                });
                // password hashing
            }
        }).catch(err =>{
            console.log(err);

            res.json({
                status : "FA",
                message : " Error occuring while checking for already existing user"
            });
        });
    }
}

const user_signin = (req, res) => 
{
    let {email,password} = req.body;
    email = email.trim();
    password = password.trim();   
 
    if(email == "" || password =="")
    {
        res.json({
            status:"FAILED",
            message: "Empty field required"
        });
    }else{
        // checking if user with given profile exists or not
         User.find({email}).then( data=>{

            if(data.length) { // user exists
                const hashedPassword = data[0].password;
                bcrypt.compare(password,hashedPassword).then(result=>{
                    if(result){ // password match

                        res.json({
                            status: "SUCCESS!",
                            message: " Signin Successful",
                            data: data
                        });
                    }
                    else{
                        res.json({
                            status: "FAILED",
                            message: "Invalid  password entered!"
                        });
                    }
                }).catch(err=>{
                    res.json({
                        status: "FAILED",
                        message: "Error occured during password matching"
                    }); 
                })
            }
            else{
                res.json({
                    status: "FAILED",
                    message: "This user is not registered!"
                });
            }
        }).catch(err=>{
            res.json({
                status: "FAILED",
                message: "Error occured during searching for existence of given user!"
            });
        })
    }
}

module.exports = { 
  user_create_post,
  user_signin
}

