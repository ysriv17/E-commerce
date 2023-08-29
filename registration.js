const errors = require("../../error-handle");
const signup = require("../model/signupmodel");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {

  const { email, password, name } = req.body;

  if (!email || !password || !name ) {
    //next() -> come work here
    res.status(100).json({ message: `${errors}` })
  }

  const user = await signup.findOne({ email })
  console.log(user)
  if (user) {
    console.log("Llllllllllllllll")
    res.json({ Message: "User already exist" });
 
  }
  else {
    const hashedpassword = await bcrypt.hash(password, 10);
    const newuser = await signup.create({ email, name, age, password: hashedpassword })
    if (newuser) {
      res.status(400).json({ Message: `user created :email: ${newuser.email}` })
      await console.log(res)
    }
  }
}

module.exports = { register }