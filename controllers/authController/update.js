require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/authModel");

const update = async (req, res) => {

    const { name, age, email } = req.body;
    const { authorization } = req.headers;

        if(!authorization){  
            return res.status(401).json({error : "Authorization token requires"})
        }

        const pureToken = authorization.split(' ')[1];
    
        try {
            const jwtUsername = jwt.verify(pureToken, process.env.SECRETS);

            const user = await UserModel.findOneAndUpdate({username : jwtUsername.data},{name , email , age},{new :true});
            
            res.status(200).json({ status: "Update sucessful" ,  user})

        } catch (error) {
            console.log(error);
            res.status(401).json({error : 'Request is not Authorized'})
        }

}

module.exports = update;