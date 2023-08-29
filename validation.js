const notempty = async (req,res,next) =>{
    const { email, password, name, age } = req.body;

    if (!email || !password || !name || !age) {
        //next() -> come work here
        res.status(100).json({ message: `${errors}` })
    }
}

const passwordvalidation = async (req, res, next) => {
    const { password } = req.body;
    const number = /[0-9]/g;
    const specialcharacter = /[$&+,:;=?@#|'<>.-^*()%!]/g;
    const uppercase = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    if (
        number.test(password)  &&
        specialcharacter.test(password)  &&
        uppercase.test(password)  &&
        lowercase.test(password)  &&
        password.length >= 8
    ) {
        next();
    }
    else {
        res.json({ message: "invalid-password" })
        throw new Error("invalid-password");


    }


}
const emailvarification = async (req, res, next) => {
    const emailcontent = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    const { email } = req.body;
    if (emailcontent.test(email)){
        console.log("valid-email");
        next();
    }
    else {
        res.json({message : " invalid-email"})
    }
}
module.exports = { notempty ,passwordvalidation, emailvarification }