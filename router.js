const express = require("express");
const { register } = require("../features/registration");
const { login } = require("../features/loginController");
const { passwordvalidation, emailvarification } = require("../middleware/validation");
const validateaccesstoken = require("../middleware/Validatemiddleware");
const { updatefield, deletefield, getdata, createfield } = require("../features/signedupcontroller");
const  router = express.Router();

console.log([emailvarification])
router.route("/signup").post([passwordvalidation , emailvarification],register); 
router.route("/login").post(login);
router.route("/logout").post();
router.route("/usersigned/update").put([validateaccesstoken],updatefield);
router.route("/usersigned/delete").delete([validateaccesstoken],deletefield);
router.route("/usersigned/list").get([validateaccesstoken],getdata);
router.route("/usersigned/add").post([validateaccesstoken],createfield)


module.exports=router;