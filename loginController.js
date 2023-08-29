const signup = require("../model/signupmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const login = async (req, res,next) => {
    const { email, password } = req.body;
    user = await signup.findOne({ email })
    if (user.email && (await bcrypt.compare(password, user.password))) {
        const accesstoken = jwt.sign({ user: { username: user.name, email: user.email, id: user.id } },
            process.env.ACCESS_TOKEN_STRING);
            console.log(user)
            res.json({accesstkn :accesstoken,user : user});
            console.log(accesstoken);
        next();
    }
    else {
        throw new Error("AUTHENTICATION FAILED")
    }

}
module.exports = { login }