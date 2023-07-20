const token = require("./jwtToken");
const bcrypt = require('bcrypt');
const UserModel = require('../../models/authModel');

const signup = async(req,res)=>{

    const {username , name ,age , email, password } = req.body ;

    const exist = await UserModel.findOne({username});

    if(exist){
        res.status(400).json({error : "user already exist"})
    }else {
        try{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            usernameToken = token(username)
            UserModel.create({username , name , age , email , password : hash})
            res.status(200).json({status : "Signup sucessful" , username , usernameToken})
        }
        catch(err){
            console.log(err.message);
            res.status(400).json({error : err.message}) 
        }
    }
}

module.exports = signup;