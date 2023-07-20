require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/authModel");

const deleteUser = async (req, res) => {

    const { authorization } = req.headers;

        if(!authorization){  
            return res.status(401).json({error : "Authorization token requires"})
        }

        const pureToken = authorization.split(' ')[1];
    
        try {
            const jwtUsername = jwt.verify(pureToken, process.env.SECRETS);

            UserModel.findOneAndDelete({username : jwtUsername.data})
            .then(res.status(200).json({ status: "sucessfully deleted"}))
            .catch(err => console.log(err));

        } catch (error) {
            console.log(error);
            res.status(401).json({error : 'Request is not Authorized'})
        }

}

module.exports = deleteUser;