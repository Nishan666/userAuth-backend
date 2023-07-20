require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (data)=>{
    return jwt.sign({data}, process.env.SECRETS, {expiresIn: "3d"})
}

module.exports = createToken;
