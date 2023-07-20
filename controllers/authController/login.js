const token = require("./jwtToken");
const bcrypt = require('bcrypt');
const UserModel = require("../../models/authModel")

const login =  async (req,res) => {

    const { username, password } = req.body;

    const user = await UserModel.findOne({username});

    if(user){
        match = bcrypt.compareSync(password , user.password);
        if (match) {
            usernameToken = token(username)
            res.status(200).json({ status : "login sucessful",username, usernameToken })
        }else{
            res.status(400).json({ error: "incorrect credentials"});
        }
    }else {
        res.status(400).json({error : "user not found"})
    }
}

module.exports = login;